import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">HIMANSHU VERMA</div>
                    <div className="toggle" id="toggle" onClick={toggleMenu}>
                        &#9776;
                    </div>
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/a">About</a></li>
                        <li><a href="/s">Skills</a></li>
                        <li><a href="/p">Projects</a></li>
                        <li><a href="/c">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
