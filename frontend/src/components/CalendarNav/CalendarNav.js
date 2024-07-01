import PropTypes from 'prop-types'
import styles from './CalendarNav.module.css'
import Calendar from 'react-calendar'
import { useState, useEffect } from 'react'

import LeftIcon from '../../assets/images/left_tri.svg'
import RightIcon from '../../assets/images/right_tri.svg'
import CalendarIcon from '../../assets/images/calendar.svg'

const { DateTime } = require("luxon");


const CalendarNav = (props) => {

    const [open, setOpen] = useState(false)
    

    const incrementDate = () => {
        const newDate = new Date(props.date)
        newDate.setDate(props.date.getDate() + 1)
        props.onChange(newDate)
    }

    const decrementDate = () => {
        const newDate = new Date(props.date)
        newDate.setDate(props.date.getDate() - 1)
        props.onChange(newDate)
    }

    const toggleDropdown = () => {
        setOpen((open) => !open)
    }

    const handleChange = () => {
        props.onChange()
        toggleDropdown()
    }


    return(
            <div className={styles.calendarNav}>
                <button onClick={decrementDate} className={styles.arrow}>
                    <img src={LeftIcon} alt="Left" />
                </button>
                <div className={styles.dropdown}>
                    <button onClick={toggleDropdown} className={`${styles.calendarButton} ${open ? styles.buttonOpen : null}`}>
                        <img className={styles.calendarIcon} src={CalendarIcon} alt="Calendar" />
                        <span className={styles.text}>{props.date.getDate().toString().padStart(2,0)}</span>
                        <span className={styles.kanji}>日</span>
                        <span className={styles.text}>{(props.date.getMonth() + 1).toString().padStart(2,0)}</span>
                        <span className={styles.kanji}>月</span>
                        <span className={styles.text}>{props.date.getFullYear().toString().padStart(4,0)}</span>
                    </button>
                    <Calendar onClickDay={toggleDropdown} onChange={props.onChange} value={props.date} className={`${styles.calendarDrop} ${open ? styles.open : null}`}/>
                </div>
                <button onClick={incrementDate} className={styles.arrow}>
                    <img src={RightIcon} alt="Right" />
                </button>
            </div>

    )
  
}

CalendarNav.propTypes = {
}

export default CalendarNav