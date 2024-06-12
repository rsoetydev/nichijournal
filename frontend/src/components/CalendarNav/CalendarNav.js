import PropTypes from 'prop-types'
import styles from './CalendarNav.module.css'
import Calendar from 'react-calendar'
import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'

import LeftIcon from '../../assets/images/left_tri.svg'
import RightIcon from '../../assets/images/right_tri.svg'
import CalendarIcon from '../../assets/images/calendar.svg'


const CalendarNav = (props) => {

    const [date, setDate] = useState(DateTime.now())
    const [open, setOpen] = useState(false)

    const incrementDate = () => {
        setDate(date.plus({ days: 1 }))
    }

    const decrementDate = () => {
        setDate(date.minus({ days: 1 }))
    }

    const toggleDropdown = () => {
        setOpen((open) => !open)
    }

    useEffect(() => {
      props.onStateChange(date)
    })


    return(
            <div className={styles.calendarNav}>
                <button onClick={decrementDate} className={styles.arrow}>
                    <img src={LeftIcon} alt="Left" />
                </button>
                <div className={styles.dropdown}>
                    <button onClick={toggleDropdown} className={`${styles.calendarButton} ${open ? styles.buttonOpen : null}`}>
                        <img className={styles.calendarIcon} src={CalendarIcon} alt="Calendar" />
                        <span className={styles.text}>{date.day.toString().padStart(2,0)}</span>
                        <span className={styles.kanji}>日</span>
                        <span className={styles.text}>{date.month.toString().padStart(2,0)}</span>
                        <span className={styles.kanji}>月</span>
                        <span className={styles.text}>{date.year.toString().padStart(4,0)}</span>
                    </button>
                    <Calendar className={`${styles.calendarDrop} ${open ? styles.open : null}`}/>
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