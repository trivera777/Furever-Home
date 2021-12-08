import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './pet.scss'

const Pet = ({ key, pet }) => {
    
 const [petFav, SetPetFav] = useState('false');

 const toggleLike = (petFav) => {
    SetPetFav({petFav: !petFav})
 }

 const changeColor =  petFav? "red": "grey"
    
 
    return (
        

        <Card key={key} style={{ width: '18rem', margin: "10px"}}>
                {pet.photos.length? (
                  <Card.Img src={pet.photos[0].small} alt={`The cover for ${pet.name}`} variant='top' />
                ): null}
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  {/* <p className='small'>Authors: {book.authors}</p> */}
                  <Card.Text>{pet.breed}{pet.description}</Card.Text>
                  <Card.Text>Distance: {pet.distance} Gender{pet.gender}  Age: {pet.age}</Card.Text>
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

}

export default Pet