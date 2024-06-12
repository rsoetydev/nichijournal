import CommuEntry from '../components/CommuEntry/CommuEntry'
import CalendarNav from '../components/CalendarNav/CalendarNav'
import { useState } from 'react'
import { DateTime } from 'luxon'



const Community = () => {
  const [date, setDate] = useState(DateTime.now())

  const handleStateChange = (newDate) => {
    setDate(newDate)
  }

    return(
      <div className="community">
         <div className="header">
            <h1>COMMUNITY</h1>
            <CalendarNav onStateChange={handleStateChange} className="cal-nav" />
          </div>
          <div className="entries">
            <CommuEntry />
          </div>
      </div>
    )
  }
  
  export default Community