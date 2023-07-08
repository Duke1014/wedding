import React from 'react'

import clipclocks from './img/clipclocks.jpg'
import dragonflysrealm from './img/dragonflysrealm.jpg'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contributors() {

    const contributorImages = [
      dragonflysrealm,
      clipclocks,
      theartofwood,
      elderearthwood,
      lyndakavy,
      jimhancock
    ]

    return (
        <div>
            <p className='font-view'>
                Our friends and family have contributed to making this day happen, and we would like to thank each and every one of you!
            </p>
            <div className='carousel-container'>
                <div className='carousel'>
                    <div className='left-arrow'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className='img-container'>

                    </div>
                    <div className='right-arrow'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
                <div className='bottom-buttons'>

                </div>
            </div>
        </div>
    )
}
