import React from 'react'
import Clock from './Clock'

export default function Home() {

    return (
        <div className='home'>
            <div className='start'>
                <p className='pic-text'>Duke and Mo</p>
                <Clock />
                <p className='pic-text'>July 25, 2023</p>
                <p className='pic-text'>Oswego, NY</p>
            </div>
            <div className='our-story-home home-section'>
                <h1 className='title'>
                    Our Story
                </h1>
            </div>
            <div className='registry-home home-section'>
                <h1 className='title'>
                    Registry
                </h1>
            </div>
            <div className='contributors-home home-section'>
                <h1 className='title'>
                    Contributors
                </h1>
            </div>
        </div>
    )
}
