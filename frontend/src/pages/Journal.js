import Entry from '../components/Entry/Entry'
import CalendarNav from '../components/CalendarNav/CalendarNav'
import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'


const Journal = () => {
  const [entries, setEntries] = useState(null)
  const [date, setDate] = useState(DateTime.now())

  const handleStateChange = (newDate) => {
    setDate(newDate)
  }

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('/api/journal')
      const json = await response.json()

      if (response.ok) {
        setEntries(json)

      }
    }

    fetchEntries()
  }, [])

    return(
      <div className="journal">
        <div className="header">
          <h1>JOURNAL</h1>
          <CalendarNav onStateChange={handleStateChange} className="cal-nav" />
        </div>
          <div className="entries">
          {entries && entries.map((entry, index) => (
            <Entry key={index} en_text={entry.en_text} jp_text={entry.jp_text} date={entry.date}/>
          ))}
          </div>
      </div>
    )
  }
  
  export default Journal