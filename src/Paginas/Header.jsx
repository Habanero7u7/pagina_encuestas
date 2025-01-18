import React from 'react'

import { Link } from 'react-router'
import Logo from '../Images/Logo.png'

const Header = () => {
    return (
        <header>
            <div className="logo" id="log">
                <Link to='/'> <img src={Logo} width="350" alt="logo" /> </Link>
                <h1>Encuestas UTEG</h1>
                <div></div>
            </div>
        </header>
    )
}

export default Header