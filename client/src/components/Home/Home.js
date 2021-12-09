import React from 'react'
import './home.scss'
import { useState, useEffect, useContext } from 'react'
import { useMutation } from '@apollo/client'
import { Container, Row, Card } from 'react-bootstrap'
import SearchForm from '../SearchForm/SearchForm'
import API from '../../utils/API'
import { usePetAuth } from '../../utils/PetAuthContext'
import Pet from '../Pet/Pet'
import {SAVE_PET} from '../../utils/mutation'
import {savePetIds, getSavedPetIds} from '../../utils/localStorage'
import Auth from '../../utils/auth'

export default function Home() {
  // const [accessToken, setAccessToken] = useState(''); 
  const [pets, setPets] = useState('dog')
  const [breed, setBreed] = useState('')
  const [zip, setZip] = useState('80516')
  const [distance, setDistance] = useState('100')

  const [results, setResults] = useState([]);
  const { accessToken } = usePetAuth();
  // var petData =[]


  const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds()) 
  const [savePet] = useMutation(SAVE_PET)

  useEffect(() => {

    return()=>savePetIds(savedPetIds)
  }, )


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;



    if (inputType === 'pets') {
      setPets(inputValue);
      //   console.log(pets)
    } else if (inputType === 'breed') {
      setBreed(inputValue);
      //   console.log(breed)
    }
    else if (inputType === 'zip') {
      setZip(inputValue);
      // console.log(zip)
    }
    else { setDistance(inputValue); }
  };

  const searchPets = async (pets, breed, zip, distance) => {
    console.log(accessToken)
    const petResults = await fetch(
      `https://api.petfinder.com/v2/animals?type=${pets}&location=${zip}`, //&breed=${breed}&distance=${distance}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
          // 'Access-Control-Allow-Origin': '*'
        },
      }
    );
    const json = await petResults.json();
    setResults(json.animals);
    // console.log(results)
    // const petData = Array.from(results)

  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchPets(pets, breed, zip, distance)
  }

  const handleSavePet = async(petId) => {

    const petToSave = results.find((pet) => pet.id ===petId)
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          console.log(petToSave, token)
          const { data } = await savePet({variables: {PetInput: petToSave}});
    
          
          console.log(data)
          // if book successfully saves to user's account, save book id to state
          setSavedPetIds([...savedPetIds, petToSave.petId]);
        } catch (err) {
          console.error(err);
        }
    
    
    }

  return (
    
    <div className="home" id="home">
      <div className="container">
          <div className='row'>
            <div className='col-8'>
               <div className="header">
              Whether you're looking for a hiking buddy,
              a snuggle buddy - small or large,
              we'll help you find your forever friend!
              </div>

          </div>

           

            <div className='col-4'>

              <SearchForm pets={pets} breed={breed} zip={zip} distance={distance} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            </div>
        </div>
        
        {/* <Container fluid="md"> */}
          <Row className="my-1 mx-1">
            <h2>
              {results.length
                ? `Viewing ${results.length} pets:`
                : ''}
            </h2>
            {/* {console.log(petData.length)} */}
            {results.map((pet) => {
              return (

                // <Pet key={pet.id} pet={pet} />
                <Card key={pet.id} style={{ width: '16rem', margin: "8px"}}>
                {pet.photos.length? (
                  <Card.Img src={pet.photos[0].small} alt={`The cover for ${pet.name}`} variant='top' />
                ): null}
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  {/* <p className='small'>Authors: {book.authors}</p> */}
                  <Card.Text>{pet.breed}{pet.description}</Card.Text>
                  <Card.Text>Distance: {pet.distance} Gender: {pet.gender}  Age: {pet.age}</Card.Text>
                  <Card.Link href= {pet.url}>Favorite</Card.Link>
                  <Card.Link href= {'/detail/'+pet.id}>Learn more </Card.Link>
                
                {/* <button className="likeBtn" onClick={toggleLike}>
                    <i className ="fas fa-heart fa-lg" style ={{color: changeColor}}></i>
                </button> */}
                 {/* < button className ="btn btn-primary" onClick ={{<Link to="/login">
                            Log In
                        </Link>}}>

                 </button> */}
                </Card.Body>
        </Card>

              )
            })}
                  </Row>
        {/* </Container> */}
      </div>

    </div>
  )
}