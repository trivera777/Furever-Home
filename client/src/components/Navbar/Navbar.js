import './navbar.scss'
import { Navbar, Button, Nav } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {useAuth} from '../../context/AuthContext';

export default function Header(){
    const {isLoggedIn, currentUser, logout} = useAuth();
    console.log(isLoggedIn, currentUser);
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand className="logo" href="/">
                Furever Home
                <img src='./img/paw.gif' alt="Paw"></img>
                {isLoggedIn && 
            <>
                <div>
                    <span>Welcome, {currentUser?.username}</span>
                    {' '}
                    <Button variant="danger" onClick={logout}>LOGOUT</Button>
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
    // <div className={"navbar " + (menuOpen && "active")}>
    //    <div className="wrapper">
    //     <div className="left">
    //     <a href="/" className="logo">
    //         Furever Home <img src='./img/paw.gif' alt="Paw"></img>
    //         </a>
    //     </div>
        
    //     {isLoggedIn && 
    //         <>
    //             <div>
    //                 <span>Welcome, {currentUser?.username}</span>
    //                 {' '}
    //                 <Button variant="danger" onClick={logout}>LOGOUT</Button>
    //             </div>
    //         </>
    //     } 
    //     <div className="right">
    //         <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
    //             <span className="line1"></span>
    //             <span className="line2"></span>
    //             <span className="line3"></span>
    //         </div>
    //     </div>
    //   </div>
    // </div>