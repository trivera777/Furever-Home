import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Adopt from '../pages/Adopt';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import RequireAuth from '../components/RequireAuth';
import Home from '../components/Home/Home'
import PrivatePage from '../pages/PrivatePage';
import {PetAuthProvider } from '../utils/PetAuthContext';

const AppRoutes= ({children}) => {
return (
	<PetAuthProvider>
		<Router>
			{children}
			<Routes>
			<Route exact path="/" element={<Home/>}/>
				<Route exact path="/adopt" element={<Adopt/>}/>
				<Route exact path="/login" element={<Login/>}/>
				<Route exact path="/signup" element={<Signup/>}/>
				<Route exact path="/private" 
					element={
						<RequireAuth>
							<PrivatePage/>
						</RequireAuth>
					}>
				</Route>
			</Routes>
		</Router>
	</PetAuthProvider>
	)
};

export default AppRoutes;