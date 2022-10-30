import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" end><i className="fab fa-react"></i> Home</NavLink></li>
                <li><i className="fas fa-home"></i> Repos</li>
                <li><NavLink to="/greet">Error</NavLink></li>
                <li><NavLink to="/404">404</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation