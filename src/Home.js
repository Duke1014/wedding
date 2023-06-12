import React, { useEffect, useState } from 'react'

export default function Home() {

  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    setInterval(countdownCalc, 1000)
  }, [])

  const countdownCalc = () => {
    let wedding = new Date(2023, 6, 25)
    wedding.setHours(11)
    let today = new Date()
    let calc = today - wedding
    let dayCalc = calc / 86400000 
    let days = Math.floor(dayCalc)
    let hourCalc = dayCalc - days
    let hours = hourCalc * 24
    let minCalc = hours - Math.floor(hours)
    let mins = minCalc * 60
    let secCalc = mins - Math.floor(mins)
    let secs = secCalc * 60
    
    // console.log(`Days: ${days}`)
    // console.log(`Hours: ${Math.floor(hours)}`) 
    // console.log(`Minutes: ${Math.floor(mins)}`)
    // console.log(`Seconds: ${Math.floor(secs)}`)
    setCountdown(`${days} days, ${Math.floor(hours)} hours, ${Math.floor(mins)} minutes, and ${Math.floor(secs)} seconds`) 
  }

  return (
    <div className='home'>
        <p>Duke and Mo</p>
        <p>July 25, 2023</p>
        <p>Oswego, NY</p>
        <p>It has been {countdown} since Duke and Mo have been married!</p>
    </div>
  )
}
