import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/Navbar.css"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbarLeft">
                <div className="logoDiv">
                    <h2 className="logo">Collectory</h2>
                </div>
            </div>

            <div className="navbarRight">

                <div className="navLinks">
                    <Link to='/recent-collections' className='nav-link'>Home</Link>
                    <Link to='/recent-collections' className='nav-link'>Collection</Link>
                    <Link to='/recent-collections' className='nav-link'>Marketplace</Link>
                    <Link to='/recent-collections' className='nav-link'>Contribute</Link>
                </div>

                <button className='addNewButton'>Add new</button>

                <div className="profile">
                    <div className="text">
                        <h5>Atharv Kasar</h5>
                        <button>View Profile</button>
                    </div>
                    <div className="profileIcon">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
