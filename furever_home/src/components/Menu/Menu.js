import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }){
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Adopt</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">Log In</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Sign In</a>
                </li>
            </ul>
        </div>
    )
}