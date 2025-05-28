import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-name">Recipes Page</h1>
                <div className="navbar-buttons">
                    <Link to="/About" className="nav-btn"><span>About</span></Link>
                    <Link to="/Contact" className="nav-btn"><span>Contact</span></Link>
                    <Link to="/Services" className="nav-btn"><span>Services</span></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar