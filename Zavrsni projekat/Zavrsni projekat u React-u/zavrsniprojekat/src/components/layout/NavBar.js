import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {

    return (
        <div>
            <nav className="navbar" >
                <p> <Link to="/pokepedia">Pokepedia</Link></p>
                <p> <Link to="/about">About</Link></p>
                <p> <Link to="/logout">Logout</Link></p>
            </nav>
        </div>
    )
}