import React, {useState, useContext, useEffect} from 'react';
import auth from '../utils/auth';

const AuthContext = React.createContext(null);

export const AuthProvider = ({user, children}) => {
	const [currentUser, setCurrentUser] = useState(user);
	const [isLoggedIn, setIsLoggedIn] = useState(false);


	const login = ({username, token}) => {
		auth.login(username, token);
		setCurrentUser({username, token});
		setIsLoggedIn(true);
	};

	const logout = () => {
		auth.logout();
		setCurrentUser(null);
		setIsLoggedIn(false);
	};


	useEffect(() => {
		const user = auth.getCurrentUser();
		console.log(user);
		if(user !== undefined) {
			login(user);
		} 
	}, []);

	return (
		<AuthContext.Provider value={{currentUser, isLoggedIn, login, logout}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);