import './navbar.scss'

export default function Nav({ menuOpen, setMenuOpen }){
    return (

        <div className={"navbar " + (menuOpen && "active")}>
           <div className="wrapper">
            <div className="left">
            <a href="#home" className="logo">
                Furever Home
                </a>
                <img src='./img/paw.gif' alt="Paw"></img>
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