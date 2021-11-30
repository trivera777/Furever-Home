const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('savedPooks');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedPets');
    },
    savedpooks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return User.find(params).sort({ createdAt: -1 });
    },
    
    getMe: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedPets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    savePet: async (parent, { PetInput }, context) => {
      if (context.user) {
        

       const user=  await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedPets: PetInput } }
        );

        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    deletePet: async (parent, { petId }, context) => {
      if (context.user) {
        

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedPets:  {petId} } }
        );

        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
  },
};

module.exports = resolvers;
