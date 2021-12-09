import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Adopt from '../pages/Adopt';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import RequireAuth from '../components/RequireAuth';
import Home from '../components/Home/Home'
import MyFavorites from '../pages/MyFavorites';
import PetDetail from '../pages/PetDetail'
import {PetAuthProvider } from '../utils/PetAuthContext';
import Confirmation from '../pages/confirmation'

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
				<Route exact path="/confirmation" element={<Confirmation/>}/>
				<Route exact path="/detail/:id" element={<PetDetail/>}/>
				<Route exact path="/favorites" 
					element={
						<RequireAuth>
							<MyFavorites/>
						</RequireAuth>
					}>
				</Route>
			</Routes>
		</Router>
	</PetAuthProvider>
	)
};

export default AppRoutes;