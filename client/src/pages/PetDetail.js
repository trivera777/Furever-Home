import { useParams } from 'react-router-dom'
import { usePetAuth } from '../utils/PetAuthContext'
import { useState, useEffect } from 'react'

const PetDetail = () => {
    const { id } = useParams()
    console.log(id)
    const {accessToken} = usePetAuth();
    const [result, setResult] = useState({})
    
    useEffect(async()=>{
        console.log( `https://api.petfinder.com/v2/animals/${id}`)
        const petResult = await fetch(
            `https://api.petfinder.com/v2/animals/${id}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const json = await petResult.json();
            setResult(json)
    },[])



    return (
        <>
        {console.log(result)}
        Pet Details go here {id}
        </>
    )
}

export default PetDetail