import './header.css';
import image from "../img/img"
import { useState } from 'react';
function Navbar(){
    const [menuNav , setMenuNav] = useState(false)

    const actionMenu = () => {
        setMenuNav(!menuNav)
    }
    return (
        <header className='header'>
                <button className='btn-mobile-menu'
                    onClick={actionMenu}    
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>  
                </button>
                <div className='logo'>
                    <img src={image.img1}/>
                </div>
                <nav className={`navbar-nav ${ menuNav ? 'isActive':''}`}>
                    <ul id='navbar-ul'>
                        <li className='navbar-li'>Inicio</li>
                        <li className='navbar-li'>Estrenos</li>
                    </ul>
                </nav>
                <div className='navbar-search'>
                    <input type='text' placeholder='Buscar'></input>
                    <button className='btn-search'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
            
                <button id='navbar-random'>
                    <img src={image.img2}/>
                </button>
                <button className='navbar-button'>Iniciar sesión</button>
                {console.log(2+2)}
        </header>
    );
}
export default Navbar;