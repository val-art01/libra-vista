import { useState } from "react"
import { Link } from 'react-router-dom';
import "./../../assets/css/header.css"

const Header = () => {
    const [navList, setNavList] = useState(false)
    return (
        <header>
            <div className="container flex">
                <div className='logo'>
                    <img src="./logo.png" alt="logo" />
                    <p>LIBRARY</p>
                </div>
                <nav className="nav">
                    <ul className="flex">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/collections">Collections</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className='toggle'>
                    <button onClick={() => setNavList(!navList)}>
                        {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;