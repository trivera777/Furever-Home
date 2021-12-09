import { useState, useEffect } from 'react'
import { Jumbotron, Container, Col, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GETME} from '../utils/queries';
import {DELETE_PET} from '../utils/mutation'
import Auth from '../utils/auth';
import { removePetId } from '../utils/localStorage';
import { useNavigate } from "react-router-dom";



const MyFavorites = (() => {
	
	const [deletePet] = useMutation(DELETE_PET);
  const navigate = useNavigate();


  let { loading, data } = useQuery(QUERY_GETME);
  const userData =  data?.getMe || {};
  console.log(userData)

  
  const handleDeletePet =  async(petId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deletePet({
        variables: {petId}
      });

      window.location.reload();
      
      removePetId(petId);
    } catch (err) {
      console.error(err);
    }
  };
	
  const adoptPet = async(petId) => {
    console.log("Adopt")
    navigate("/adopt")
  }
	
	return (
		// <main className="login" id="login">
    // 	<div className="container">
		// <div>Need to be logged in to see this!</div>
		// </div>
		// </main>
  <div>
      <div>Need to be logged in to see this!</div>
        <Container>
          <h1>Viewing Favorite Pets!</h1>
        </Container>
      
      <Container>
        {console.log (userData)}
        <h2>
          {!loading
            ? `Viewing ${userData.savedPets.length} saved ${userData.savedPets.length === 1 ? 'Pet' : 'Pets'}:`
            : 'No Favorites yet!'}
        </h2>
        <Col>
        {!loading
            ? userData.savedPets.map((pet) => {
            return (
              <Card key={pet.petId} border='dark'>
                {pet.image ? <Card.Img src={pet.image} alt={`The image for ${pet.name}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  
                  <Card.Text>{pet.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeletePet(pet.petId)}>
                    Unfavorite
                  </Button>
                  <Button className='btn-block btn-primary' onClick={()=>adoptPet(pet.petId)}> Adopt!</Button>
                </Card.Body>
              </Card>
            ); 
           
        } ) : ""} 
        </Col>
      </Container>
  </div>

	)
});

export default MyFavorites;
