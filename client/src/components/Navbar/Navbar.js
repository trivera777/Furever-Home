import './navbar.scss'
// import {useAuth} from '../../context/AuthContext';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Navbar({ menuOpen, setMenuOpen }){
    // const {isLoggedIn, currentUser, logout} = useAuth();
    // console.log(isLoggedIn, currentUser);
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
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