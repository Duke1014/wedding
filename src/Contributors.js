import React from 'react'

import clipclocks from './img/clipclocks.jpg'
import dragonflysrealm from './img/dragonflysrealm.jpg'

export default function Contributors() {

    const contributorImages = [
      dragonflysrealm,
      clipclocks
    ]

    return (
        <div>
            <p className='font-view'>
                A lot of you and our friends have contributed to making this day happen, and we would like to thank each and every one of you!
            </p>

        </div>
    )
}
