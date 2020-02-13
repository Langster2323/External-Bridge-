import React from 'react';

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue darken-1">
            <div className="container">
                <a className="brand-logo">Bridges</a>
                <ul className="right">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;