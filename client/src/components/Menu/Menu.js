import React from 'react';

import './menu.scss'
import {useAuth} from '../../context/AuthContext'
import {Link} from 'react-router-dom';

export default function Menu({ menuOpen, setMenuOpen }){
    const {isLoggedIn} = useAuth();
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li>
                    <Link to="/" onClick={()=>setMenuOpen(false)}>
                        Adopt
                    </Link>
                </li>
                {!isLoggedIn &&
                    <>
                    <li>
                        <Link to="/login" onClick={()=>setMenuOpen(false)}>
                            Log In
                        </Link>
                    </li>
                    <li >
                        <Link to="/signup" onClick={()=>setMenuOpen(false)}>
                            Sign Up
                        </Link>
                    </li>
                    </>
                }
                {isLoggedIn &&
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to="/private" onClick={()=>setMenuOpen}>Private Page</Link>
                    </li>
                }
            </ul>
        </div>
    )
}