import React from 'react'
import './home.scss'
import { useState } from 'react'
import { Container, Row, Column, Card} from 'react-bootstrap'
import SearchForm from '../SearchForm/SearchForm'


export default function Home(){
    
    const [pets, setPets] = useState('')
    const [breed,setBreed] = useState('')
    const [zip, setZip] = useState('')
    const [distance,setDistance] = useState()
    
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


      const handleFormSubmit =(e) => {
        e.preventDefault();  
        console.log(pets)
          console.log(breed)
          console.log(zip)
          console.log(distance)
          searchPets()
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