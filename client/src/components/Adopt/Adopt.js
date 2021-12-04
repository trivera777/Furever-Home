import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './adopt.scss'

export default function Adopt(){
    return(
        <div className="adopt" id="adopt">
            <div className="wrapper">
                Available Pets
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>
                    Description of animal
                    </Card.Text>
                    <Button variant="primary">Adopt Me</Button>
                </Card.Body>
                </Card>
            </div>

        </div>
        // <>
        // </>
    )
}