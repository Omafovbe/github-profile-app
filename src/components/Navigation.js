import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <nav>
            <ul className= {`nav__links ${ isOpen ? "toggle__navbar": ""}`}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav__active' : 'nav__inactive'} end='end'>Home</NavLink></li>
                <li> Repos</li>
                <li><NavLink className={({ isActive }) => isActive ? 'nav__active' : 'nav__inactive'} to="/greet">Error</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'nav__active' : 'nav__inactive'} to="/404">404</NavLink></li>
            </ul>
            

            <div id="mobile">
                <i className={ isOpen ? "fas fa-times": "fas fa-bars"} onClick={toggleMenu}></i>   
            </div>
        </nav>
    )
}

export default Navigation