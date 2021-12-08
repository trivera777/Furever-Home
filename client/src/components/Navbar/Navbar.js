import { Navbar, Button, Nav } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {useAuth} from '../../context/AuthContext';

export default function Header(){
    const {isLoggedIn, currentUser, logout} = useAuth();
    // console.log(isLoggedIn, currentUser);
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand style={{fontSize: "40px", float: "10px",fontFamily: "Gloria Hallelujah, cursive"}} href="/">
                Furever Home
                <img src='./img/paw.gif' alt="Paw" style={{ width: "60px" }}></img>
                {isLoggedIn && 
                    <>
                    <div>
                        <span>Welcome, {currentUser?.username}</span>
                        {' '}
                        <Button variant="danger" onClick={logout}>Logout</Button>
                    </div>
                    </>
                } 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/adopt">Adoption Form</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        )
    }