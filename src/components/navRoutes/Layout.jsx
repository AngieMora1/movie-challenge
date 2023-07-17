import { Outlet } from "react-router-dom";
import NavBar from '../header/NavBar';

function Layout() { 

    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )

}
export default Layout