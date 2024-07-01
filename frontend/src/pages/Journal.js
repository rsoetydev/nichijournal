import Entry from '../components/Entry/Entry'
import CalendarNav from '../components/CalendarNav/CalendarNav'


import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEntriesContext } from '../hooks/useEntriesContext'





const Journal = () => {
  const [date, setDate] = useState(new Date())
  const [filter, setFilter] = useState(false)
  const { entries, dispatch } = useEntriesContext()
  const { user } = useAuthContext()
  let lastDate = null;

  const handleStateChange = (newDate) => {
    setDate(newDate)
    setFilter(true) // sets filter when date changes so journal shows all entries upon first opening
  }

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('/api/journal', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      // Filter entries based on date
      const filteredJson = json.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate.toDateString() === date.toDateString();
      })

      if (response.ok) {
        dispatch({type: 'SET_ENTRIES', payload: filter == true ? filteredJson : json })
      }
    }

    if(user) {
      fetchEntries()
    }
  }, [dispatch, user, date])
 


    return(
      <div className="journal">
        <div className="header">
          <h1>JOURNAL</h1>
          <CalendarNav date={date} onChange={handleStateChange}/>
        </div>
            <div className="entries">
            {entries && entries.map((entry, index) => {
                const entryDate = new Date(entry.date).toDateString()
                const showSeperator = entryDate !== lastDate
                console.log(entry)
                lastDate = entryDate
                
                return (
                  <div key={entry.id}>
                    {showSeperator && index !== 0 && <hr />}
                    <Entry entry={entry} showDate={showSeperator}/>
                  </div>
                )
            })}
          </div>
      </div>
    )
  }
  
  export default Journal