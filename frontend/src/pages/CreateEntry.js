import CalendarNav from "../components/CalendarNav/CalendarNav"
import { useState } from 'react'
import { DateTime } from 'luxon'

const CreateEntry = () => {

  const [date, setDate] = useState(DateTime.now())

  const handleStateChange = (newDate) => {
    setDate(newDate)
  }

    return(
      <div className="create-entry">
        <div className="header">
          <h1>CREATE ENTRY</h1>
          <CalendarNav onStateChange={handleStateChange} className="cal-nav" />
        </div>
          
          <div className="form-div">
            <form>
              <label>
                English Text:
                <textarea
                  name="en-text"
                  rows={10}
                  cols={58}
                />
              </label>
              <label>
                Japanese Text:
                <textarea
                  name="jp-text"
                  rows={10}
                  cols={58}
                />
              </label>
            </form>
          </div>
          

          <div className="buttons">
                <button className="photo-button">ATTACH PHOTO</button>
                <button className="save-button">SAVE</button>
              </div>

      </div>
    )
  }
  
  export default CreateEntry