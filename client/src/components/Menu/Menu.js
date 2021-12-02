import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }){
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/">Adopt</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/login">Log In</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/signup">Sign Up</a>
                </li>
            </ul>
        </div>
    )
}