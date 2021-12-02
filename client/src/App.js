import './App.scss';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import Adopt from './components/Adopt/Adopt';
import Login from './components/Login/Login'
import Signup from "./components/Signup/Signup";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
<div className="app">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu />
    <div className="sections">
      <Home />
      <Adopt />
      <Login />
      <Signup />
    </div>
</div>
  );
}

export default App;
