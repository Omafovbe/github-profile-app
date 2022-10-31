import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const menuLinks = [
        {
            name: 'Home',
            url: '/',
            end: 'end'
        },
        {
            name: 'Repos',
            url: '/repos'
        },
        {
            name: 'Error',
            url: '/greet'
        },
        {
            name: '404',
            url: '/404',
        },
    ]
    return (
        <nav>
            <ul className={`nav__links ${isOpen ? "toggle__navbar" : ""}`}>
                {menuLinks.map(menu => {
                    return(<li key={menu.name}><NavLink to={menu.url} className={({ isActive }) => isActive ? 'nav__active' : 'nav__inactive'} {...menu}>{menu.name}</NavLink></li>)
                })}
                
            </ul>
            

            <div id="mobile" className={ isOpen ? "menu__open": ""} onClick={toggleMenu}>
                <div className="hamburger__btn"></div>
                {/* <i className={ isOpen ? "fas fa-times": "fas fa-bars"} onClick={toggleMenu}></i>    */}
            </div>
        </nav>
    )
}

export default Navigation