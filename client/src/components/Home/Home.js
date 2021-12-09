import React from 'react'
import './home.scss'
import { useState, useEffect, useContext } from 'react'
import { useMutation } from '@apollo/client'
import { Container, Row, Card, Button } from 'react-bootstrap'
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
  const [savePet, {error}] = useMutation(SAVE_PET)

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
    console.log(json.animals)
    // setResults(json.animals);
    // console.log(results)

    const petData = json.animals.map((pet) => ({
      type: pet.type,
      description: pet.description,
      petId: pet.id,
      image: ( pet.photos.length?  pet.photos[0].medium : '') ,
      link: pet.url,
      name: pet.name,
      gender: pet.gender,
      contact_email: pet.contact.email,
      contact_phone: pet.contact.phone,
      breed: pet.breeds.primary,
      size: pet.size,
      distance: pet.distance,
      age: pet.age


    }))
    // const petData = Array.from(results)
    setResults(petData);
     console.log(petData)
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchPets(pets, breed, zip, distance)
  }

  
  const handleSavePet = async(petId) => {

    const petToSave = results.find((pet) => pet.petId ===petId)
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        // try {
          console.log(petToSave)
          // const { data } = await savePet({variables: {PetInput: petToSave}});
          // const { data } = await savePet({variables: {PetInput: {petToSave}}});
          console.log({type: petToSave.type, description: petToSave.description, petId: petToSave.petId.toString(), image: petToSave.image, link: petToSave.link, name: petToSave.name   })
          const { data } = await savePet({variables: {PetInput: {type: petToSave.type, description: petToSave.description, petId: petToSave.petId.toString(), image: petToSave.image, link: petToSave.link, name: petToSave.name   }}});


          console.log(data)
          // if book successfully saves to user's account, save book id to state
          // setSavedPetIds([...savedPetIds, petToSave.petId]);
        // } catch (err) {
        //   console.error(err);
        // }
    
    
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
                {pet.image? (
                  <Card.Img src={pet.image} alt={`The cover for ${pet.name}`} variant='top' />
                ): null}
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  {/* <p className='small'>Authors: {book.authors}</p> */}
                  <Card.Text>{pet.breed}{pet.description}</Card.Text>
                  <Card.Text>
                    Distance: {pet.distance} <br></br>
                    Gender: {pet.gender}  <br></br>
                    Age: {pet.age}<br></br>
                    Size: {pet.size}<br></br>
                    Breed: {pet.breed}<br></br>
                  </Card.Text>
                  {
                    Auth.loggedIn() && (
                      <Button
                      disabled={savedPetIds?.some((savedPetId) => savedPetId === pet.petId)}
                      className='btn btn-primary'
                      onClick={() => handleSavePet(pet.petId)}>
                        {/* {console.log (savedPetIds)} */}
                       {savedPetIds?.some((savedPetId) => savedPetId === pet.petId)
                        ? 'Pet added to Favs'
                        : 'Favorite this Pet'}
                    </Button>   
                    )
                  }
                  <br></br>
                  <br></br>
                  {/* <Card.Link href= {pet.url}>Favorite</Card.Link> */}
                  
                  {/* <Card.Link href= {'/detail/'+pet.id}>Learn more </Card.Link> */}
                  <Card.Link href= {pet.url}>Learn more </Card.Link> 
                
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