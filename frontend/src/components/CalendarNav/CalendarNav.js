import PropTypes from 'prop-types'
import styles from './CalendarNav.module.css'

import LeftIcon from '../../assets/images/left-tri.svg'
import RightIcon from '../../assets/images/right-tri.svg'
import CalendarIcon from '../../assets/images/calendar.svg'


const CalendarNav = (props) => {

    return(
        <div className={styles.calendarNav}>
            <button className={styles.arrow}>
                <img src={LeftIcon} alt="Left" />
            </button>
            <button className={styles.calendarButton}>
                <img src={CalendarIcon} alt="Calendar" />
                <span className={styles.month}>09</span>
            </button>
            <button className={styles.arrow}>
                <img src={RightIcon} alt="Right" />
            </button>
        </div>

    )
  
}

CalendarNav.propTypes = {
}

export default CalendarNav