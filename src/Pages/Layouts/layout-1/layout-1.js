


import "./layout-1.css"
import {Link,Outlet} from "react-router-dom"


function Layout1(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                 <li>
                    <Link to="/About-us">About us</Link>
                </li>

                 <li>
                    <Link to="/Contact-us">Contact us</Link>
                </li>

                 <li>
                    <Link to="/Service">Services</Link>
                </li>

                 <li>
                    <Link to="/Our-Team">Our Team</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Layout1;