import './navbar.scss'

export default function Navbar({ menuOpen, setMenuOpen }){
    return (
        <div className={"navbar " + (menuOpen && "active")}>
           <div className="wrapper">
            <div className="left">
            <a href="/" className="logo">
                Furever Home <img src='./img/paw.gif' alt="Paw"></img>
                </a>
            </div>
            <div className="itemContainer">

                    <div className="item">Available Cats</div>
                    <div className="item">Available Small Pets</div>
                    <div className="item">Success Stories ?</div>
                </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
         </div>
        </div>
    )
}