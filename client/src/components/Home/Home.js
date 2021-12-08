import React from 'react'
import './home.scss'
import { useState, useEffect, useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import SearchForm from '../SearchForm/SearchForm'
import API from '../../utils/API'
import { usePetAuth } from '../../utils/PetAuthContext'
import Pet from '../Pet/Pet'

export default function Home() {
  // const [accessToken, setAccessToken] = useState(''); 
  const [pets, setPets] = useState('dog')
  const [breed, setBreed] = useState('')
  const [zip, setZip] = useState('80516')
  const [distance, setDistance] = useState('100')

  const [results, setResults] = useState([]);
  const { accessToken } = usePetAuth();
  // var petData =[]

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

  useEffect(() => {

    console.log(results)
  }, [results])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchPets(pets, breed, zip, distance)
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
        
        <Container fluid="md">
          <Row className="my-3 mx-3">
            <h2>
              {results.length
                ? `Viewing ${results.length} pets:`
                : 'No Pets found, please change search criteria'}
            </h2>
            {/* {console.log(petData.length)} */}
            {results.map((pet) => {
              return (

                <Pet key={pet.id} pet={pet} />

              )
            })}
                  </Row>
        </Container>
      </div>

    </div>
  )
}