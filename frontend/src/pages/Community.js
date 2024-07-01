import CommuEntry from '../components/CommuEntry/CommuEntry'
import CalendarNav from '../components/CalendarNav/CalendarNav'
import { useState } from 'react'
import { DateTime } from 'luxon'



const Community = () => {
  
  const [date, setDate] = useState(new Date())

  const handleStateChange = (newDate) => {
    setDate(newDate)
  }
  

    return(
      <div className="community">
         <div className="header">
            <h1>COMMUNITY</h1>
            
            <CalendarNav date={date} onChange={handleStateChange}/>
          </div>
          <div className="entries">
            <CommuEntry />
          </div>
      </div>
    )
  }
  
  export default Community