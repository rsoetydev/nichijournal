import CalendarNav from "../components/CalendarNav/CalendarNav"
import { useState } from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { Link } from 'react-router-dom'

const CreateEntry = () => {

  const [date, setDate] = useState(new Date())
  const [en_text, setEnText] = useState('')
  const [jp_text, setJpText] = useState('')
  const [error, setError] = useState(null)
  const [success,setSuccess] = useState(null)
  const { user } = useAuthContext()
  const [emptyFields, setEmptyFields] = useState([])

  const handleStateChange = (newDate) => {
    setDate(newDate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const entry = {en_text, jp_text, 'date': date.toISOString()}
    console.log(entry)

    const response = await fetch('/api/journal' , {
      method: 'POST',
      body: JSON.stringify(entry),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
      setSuccess(null)
    }

    if (response.ok) {
      setEnText('')
      setJpText('')
      setError(null)
      setEmptyFields([])
      setSuccess('Entry added.')
    }
  }

    return(
      <div className="create-entry">
        <div className="header">
          <h1>CREATE ENTRY</h1>
          <CalendarNav date={date} onChange={handleStateChange} value={date} />
        </div>
        <div className="create-body">
          <div className="form-div">
            <form>
              <label>
                English:
                <textarea
                  name="en-text"
                  rows={10}
                  cols={58}
                  onChange={(e) => setEnText(e.target.value)}
                  value={en_text}
                  className={emptyFields.includes('english text') ? 'error' : ''}
                />
              </label>
              <label>
                日本語:
                <textarea
                  name="jp-text"
                  rows={10}
                  cols={58}
                  onChange={(e) => setJpText(e.target.value)}
                  value={jp_text}
                  className={emptyFields.includes('japanese text') ? 'error' : ''}
                />
              </label>
            </form>
          </div>
          

          <div className="buttons">
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}
                <button className="photo-button">ATTACH PHOTO</button>
                <button onClick={handleSubmit} className="save-button">SAVE</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default CreateEntry