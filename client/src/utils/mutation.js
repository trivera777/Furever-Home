import { gql } from '@apollo/client';

export const CREATE_USER =gql`
mutation createUser($username:String!, $email:String!, $password:String!){
    createUser(username:$username, email:$email, password: $password){
      token
      __typename
      
    }
  }`;

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!){
    loginUser(email:$email, password:$password) {
      token
      user{
        username
      }
    }
    
  }`;

export const SAVE_PET = gql`
mutation savePet($PetInput:PetInput!){
	savePet(PetInput:$PetInput){
    username
    savedPets{
      type
      description
      petId
      image
      link
      name
    }
  }  
}`;

export const DELETE_PET = gql`
mutation deletePet($petId: String!){
    deletePet(petId: $petId) {
      username
      savedPets{
        _id
      }
    }
    
  } `;