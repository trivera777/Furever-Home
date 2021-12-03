import React from "react";
import {Navigate,  useLocation} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import auth from '../utils/auth';


const RequreAuth= ({children }) => {
	const location = useLocation();
	const {isLoggedIn} = useAuth();

	if(!auth.loggedIn()) {
		return <Navigate to="/" state={{from: location}}/>
	}

	return children;

}

