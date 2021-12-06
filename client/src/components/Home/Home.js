import React from 'react'
import './home.scss'
import { useState, useEffect,useContext } from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import SearchForm from '../SearchForm/SearchForm'
import API from '../../utils/API'
import { usePetAuth } from '../../utils/PetAuthContext'

export default function Home(){
  // const [accessToken, setAccessToken] = useState(''); 
  const [pets, setPets] = useState('')
  const [breed,setBreed] = useState('')
  const [zip, setZip] = useState('')
  const [distance,setDistance] = useState('')
 
  const [results, setResults] = useState('');
  const {accessToken} = usePetAuth();
    

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
        else if (inputType==='zip') {
            setZip(inputValue);
            // console.log(zip)
        }
        else {setDistance(inputValue); }
      };

      const searchPets = async(pets, breed, zip, distance)=> {
        console.log(accessToken)
        const petResults = await fetch(
          `https://api.petfinder.com/v2/animals?type=${pets}&location=${zip}&breed=${breed}&distance=${distance}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const json = await petResults.json();
        setResults(json.animals);
        console.log(json.animals)

      }
      const handleFormSubmit =(e) => {
        e.preventDefault();  
        searchPets(pets, breed, zip, distance)
      }
    return (
        <div className="home" id="home">
            <div className="container">
                <div className="header">
                    Whether you're looking for a hiking buddy, 
                    a snuggle buddy - small or large, 
                    we'll help you find your forever friend!
                </div>
                
                <SearchForm pets={pets} breed={breed} zip={zip} distance={distance} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}/>
            </div>
            
        </div>
        
        
    )
}