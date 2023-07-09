import React from 'react'

import clipclocks from './img/clipclocks.jpg'
import dragonflysrealm from './img/dragonflysrealm.jpg'
import jimhancock from './img/jimhancock.jpg'
import lyndakavy from './img/lyndakavy.jpg'
import artofthewood from './img/artofthewood.jpg'
import elderearth from './img/elderearth.jpg'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contributors() {


    //   https://www.jimhancock.com/index.htm
    // https://www.facebook.com/ArtoftheWood/

    return (
        <div>
            <p className='font-view'>
                Our friends and family have contributed to making this day happen, and we would like to thank each and every one of you!
            </p>
            <div className='collage'>
                <a href='https://www.clipclocks.com/#/' id='clipclocks'>
                    <img src={clipclocks} alt='clipclocks' />
                </a>
                <a href='https://www.dragonflysrealm.com/' id='dragonflysrealm'>
                    <img src={dragonflysrealm} alt='dragonflysrealm' />
                </a>
                <a href='https://www.facebook.com/ArtoftheWood/' id='theartofwood'>
                    <img src={artofthewood} alt='artofthewood' />
                </a>
                <a href='https://www.facebook.com/ElderEarth96/' id='elderearth'>
                    <img src={elderearth} alt='elderearth' />
                </a>
                <a href='https://www.jimhancock.com/index.htm' id='jimhancock'>
                    <img src={jimhancock} alt='jimhancock' />
                </a>
                <a href='https://emptyhats.com/' id='lyndakavy'>
                    <img src={lyndakavy} alt='lyndakavy' />
                </a>
            </div>
        </div>
    )
}
