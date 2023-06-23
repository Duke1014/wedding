import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    const handleScroll = (e) => {
        let scroll = document.getElementById(e)
        scroll.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <nav>
            <span className='title'>
                Duke a la Mo
            </span>
            <FontAwesomeIcon 
                className='menu-icon'
                icon={faBars} 
                style={{color: "#0069e7",}} 
                onClick={() => setMenu(!menu)}
            />
            <ul className={menu ? 'menu menu-on-screen' : 'menu'}>
                <li onClick={() => handleScroll('home')}>
                    Home
                </li>
                <li onClick={() => handleScroll('our-story')}>
                    Our Story
                </li>
                <li onClick={() => handleScroll('registry')}>
                    Registry
                </li>
                <li onClick={() => handleScroll('contributors')}>
                    Contributors
                </li>
            </ul>
        </nav>
    )
}
