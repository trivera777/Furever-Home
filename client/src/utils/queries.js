import { gql } from '@apollo/client';

export const QUERY_GETME = gql`
query getMe {
    getMe {
      username
      email
      savedPets {
        description
        petId
        image
        link
        name
        
      }
    }
    
  }`;