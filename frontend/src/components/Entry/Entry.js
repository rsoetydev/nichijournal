import { useState } from 'react'
import { useEntriesContext } from '../../hooks/useEntriesContext'

import styles from './Entry.module.css'

import LangButton from '../LangButton/LangButton'

import ShareIcon from '../../assets/images/share.svg'
import DeleteIcon from '../../assets/images/delete.svg'
import DeleteIconHover from '../../assets/images/delete_hover.svg'
import EditIcon from '../../assets/images/pencil.svg'
import { useAuthContext } from '../../hooks/useAuthContext'



const Entry = ({ entry, showDate }) => {

    const [over, setOver] = useState(false)
    const { dispatch } = useEntriesContext()
    const { user } =useAuthContext()
    const date = new Date(entry.date)
    const [isJP, setJP] = useState(true) 
    const [editMode, setEditMode] = useState(false)
    
    const [error, setError] = useState(null)
    const [success,setSuccess] = useState(null)
    const [emptyFields, setEmptyFields] =useState([])
    const [en_text, setEnText] = useState(entry.en_text)
    const [jp_text, setJpText] = useState(entry.jp_text)

    const handleJP = () => {
      setJP(true)
    }

    const handleEN = () => {
      setJP(false)
    }
    
    const handleDelete = async() => {
        if (!user) {
            return
        }
        const response = await fetch('/api/journal/' + entry._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
              }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_ENTRY', payload: json})
        }
      
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
      
        if (!user) {
          setError('You must be logged in');
          return;
        }
      
        const updatedEntry = { en_text, jp_text };
        console.log(en_text)
        console.log(jp_text)
      
        try {
          const response = await fetch(`/api/journal/${entry._id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedEntry),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
            }
          });

          const json = await response.json()
          console.log(json)
      
          if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
            setSuccess(null)
            return
          }
      
          // Fetch the updated entry after successful PATCH
          const fetchResponse = await fetch(`/api/journal/${entry._id}`, {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          });
      
          if (!fetchResponse.ok) {
            const fetchErrorJson = await fetchResponse.json();
            setError(fetchErrorJson.error || 'Failed to fetch updated entry');
            setSuccess(null)
            return;
          }
      
          const updatedJson = await fetchResponse.json()
      
          // Update the local state and context with the fetched updated entry
          dispatch({ type: 'UPDATE_ENTRY', payload: updatedJson })
          setSuccess('Entry updated successfully')
          setEnText('')
            setJpText('')
            setError(null)
            setEmptyFields([])
          setEditMode(false)
      
        } catch (error) {
          console.error('Error updating entry:', error)
          setError(error.message || 'Failed to update entry')
          setSuccess(null)
        }
      };

    const toggleEdit = () => {
        setEditMode(!editMode)
      
    }

    return(
        <div className={styles.row}>
            <div className={styles.card}>
                {!editMode
                    ?   <div className={styles.content}>
                            <p className={`${styles.entryText} ${isJP ? styles.hidden : null}`}>{entry.en_text}</p>
                            <p className={`${styles.entryText} ${isJP ? null : styles.hidden}`}>{entry.jp_text}</p>
                            <img 
                                onClick={handleDelete}
                                onMouseOver={() => setOver(true)}
                                onMouseOut={() => setOver(false)}
                                className={styles.delete} 
                                src={over ? DeleteIconHover : DeleteIcon} 
                                alt="delete" 
                            />
                        </div>
                    :   <div className ={styles.contentEdit}>
                           <label>
                                English:
                                <textarea
                                    name="en-text"
                                    rows={10}
                                    cols={58}
                                    value={en_text}
                                    onChange={(e) => setEnText(e.target.value)}
                                    className={emptyFields.includes('english text') ? 'error' : ''}
                                />
                            </label>
                            <label>
                                日本語:
                                <textarea
                                    name="jp-text"
                                    rows={10}
                                    cols={58}
                                    value={jp_text}
                                    onChange={(e) => setJpText(e.target.value)} 
                                    className={emptyFields.includes('japanese text') ? 'error' : ''}
                                />
                            </label>
                        </div>
                }
                {!editMode
                    ?   <div className={styles.options}>
                            <div className={styles.langOptions}>
                                <LangButton  onClick={handleEN} lang='EN' toggle={isJP ? false : true}/>
                                <LangButton  onClick={handleJP} lang='JP' toggle={isJP ? true : false}/>
                            </div>
                            <div className={styles.cardOptions}>
                                <img className={styles.editIcon} src={EditIcon} alt="Edit" onClick={toggleEdit}/>
                                <img className={styles.shareIcon} src={ShareIcon} alt="Share" />
                            </div>
                        </div>
                    :   <div className={styles.options}>
                        
                            {success && <div className="success">{success}</div>}
                            {error && <div className="error">{error}</div>}
                            <div className={styles.editOptions}>
                                <button onClick={handleUpdate}>Save</button>
                                <button onClick={toggleEdit}>Cancel</button>
                            </div>
                        </div>
                }
            </div>
            <div className={`${styles.date} ${!showDate ? styles.hideDate : ''}`}>
                <span className={styles.day}>{date.getDate().toString().padStart(2,0)}</span>
                <div className={styles.month}>
                    <span>{(date.getMonth() + 1).toString().padStart(2,0)}</span>
                    <span className={styles.gatsu}>月</span>
                </div>
                <span className={styles.year}>{date.getFullYear()}</span>
            </div>
        </div>
    )
  
}

export default Entry