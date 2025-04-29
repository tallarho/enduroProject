import { useEffect, useState } from 'react'

const ActuallyTime = () => {

    const [now, setNow] = useState(new Date())
   useEffect(() => {
    const interval = setInterval(() => {
        setNow(new Date())
    }, 1000)
    return () => clearInterval(interval)
   },[])

  return (
    <div>
        {now.toLocaleTimeString()}
    </div>
  )
}

export default ActuallyTime