import React from 'react'
import Clock from './Clock'
import OurStory from './OurStory'
import Contributors from './Contributors'
import Registry from './Registry'

export default function Home() {

    return (
        <div className='home'>
            <div className='start' id='home'>
                <p className='pic-text'>Duke and Mo</p>
                <Clock />
                <p className='pic-text'>July 25, 2023</p>
                <p className='pic-text'>Oswego, NY</p>
            </div>
            <div className='our-story-home home-section' id='our-story'>
                <h1 className='title'>
                    Our Story
                    <OurStory />
                </h1>
            </div>
            <div className='registry-home home-section' id='registry'>
                <h1 className='title'>
                    Registry
                    <Registry />
                </h1>
            </div>
            <div className='contributors-home home-section' id='contributors'>
                <h1 className='title'>
                    Contributors
                    <Contributors />
                </h1>
            </div>
        </div>
    )
}
