import './navbar.scss'
import {useAuth} from '../../context/AuthContext';
import Button from 'react-bootstrap/Button'

export default function Navbar({ menuOpen, setMenuOpen }){
    const {isLoggedIn, currentUser, logout} = useAuth();
    console.log(isLoggedIn, currentUser);
    return (
        <div className={"navbar " + (menuOpen && "active")}>
           <div className="wrapper">
            <div className="left">
            <a href="/" className="logo">
                Furever Home <img src='./img/paw.gif' alt="Paw"></img>
                </a>
            </div>
            
            {isLoggedIn && 
                <>
                    <div>
                        <span>Welcome, {currentUser?.username}</span>
                        {' '}
                        <Button variant="danger" onClick={logout}>LOGOUT</Button>
                    </div>
                </>
            } 
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
          </div>
        </div>
    )
}