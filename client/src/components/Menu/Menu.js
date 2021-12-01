import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }){
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/adopt">Adopt</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/login">Log In</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/signup">Sign In</a>
                </li>
            </ul>
        </div>
    )
}