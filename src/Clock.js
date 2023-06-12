import React, {useState, useEffect} from 'react'

export default function Clock() {

    const [countdown, setCountdown] = useState('')

    useEffect(() => {
        setInterval(countdownCalc, 1000)
      }, [])

    const countdownCalc = () => {
        let wedding = new Date(2023, 6, 25)
        let sign
        wedding.setHours(11)
        let today = new Date()
        if (Math.sign(today - wedding) === -1) {
          sign = '-'
        }
        let calc = Math.abs(today - wedding)
        let dayCalc = calc / 86400000 
        let days = Math.floor(dayCalc)
        let hourCalc = dayCalc - days
        let hours = hourCalc * 24
        let minCalc = hours - Math.floor(hours)
        let mins = minCalc * 60
        let secCalc = mins - Math.floor(mins)
        let secs = secCalc * 60
        setCountdown(`${sign}${days} days, ${Math.floor(hours)} hours, ${Math.floor(mins)} minutes, and ${Math.floor(secs)} seconds`) 
    }

    return (
        <div>
            <p className = 'clock'>It has been {countdown} since Duke and Mo have been married!</p>
        </div>
    )
}
