import styles from './navBar.module.css';
import image from '../../assets/img/img';
import ClickStatusNav from './ClickStatusNav.jsx'

function NavBar () {
    
    return(
        <nav className={styles.navBar}>
            <div className={styles.divLogo}>
                <img src={image.img3} alt="Logo" className={styles.logo}/>
            </div>
            <ul className={styles.navLinks}>
                <ClickStatusNav 
                    routeItem = '/'
                    item = 'Inicio'/>
                <ClickStatusNav 
                    routeItem = 'premiere'
                    item = 'Estrenos'/>
            </ul>
        </nav>
    )
}

export default NavBar;
{/* <Link to='/'>Inicio</Link>
<Link to='premiere'>Estrenos</Link>
<a href="#">Servicios</a>
<a href="#">Contacto</a> */}