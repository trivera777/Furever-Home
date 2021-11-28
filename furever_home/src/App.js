import './App.scss';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
<div className="app">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu />
            <div className="sections">
                
            </div>
        </div>
  );
}

export default App;
