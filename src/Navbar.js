import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <div>
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
                    <li>
                        Home
                    </li>
                    <li>
                        Our Story
                    </li>
                    <li>
                        Registry
                    </li>
                    <li>
                        Contributors
                    </li>
                </ul>
            </nav>
        </div>
    )
}
