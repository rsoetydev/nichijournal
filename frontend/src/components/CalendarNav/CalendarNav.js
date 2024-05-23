import PropTypes from 'prop-types'
import styles from './CalendarNav.module.css'

import LeftIcon from '../../assets/images/left_tri.svg'
import RightIcon from '../../assets/images/right_tri.svg'
import CalendarIcon from '../../assets/images/calendar.svg'


const CalendarNav = (props) => {

    return(
        <div className={styles.calendarNavRow}>
            <span className={styles.date}>05
                <span className={styles.bold}>日</span>
                09
                <span className={styles.bold}>月</span>
                2024
            </span>
            <div className={styles.calendarNav}>
                <button className={styles.arrow}>
                    <img src={LeftIcon} alt="Left" />
                </button>
                <button className={styles.calendarButton}>
                    <img className={styles.calendarIcon} src={CalendarIcon} alt="Calendar" />
                    <span className={styles.month}>09</span>
                </button>
                <button className={styles.arrow}>
                    <img src={RightIcon} alt="Right" />
                </button>
            </div>
        </div>

    )
  
}

CalendarNav.propTypes = {
}

export default CalendarNav