import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './CommuEntry.module.css'
import LangButton from '../LangButton/LangButton'
import UserPic from '../../assets/images/userPic.jpg'


const CommuEntry = (props) => {

    const [over, setOver] = useState(false);

    const [isJP, setJP] = useState(true)

    const handleJP = () => {
      setJP(true)
    }

    const handleEN = () => {
      setJP(false)
    }

    return(
        <div className={styles.row}>
            <div className={styles.card}>
                <div className={styles.cardInfo}>
                    <div className={styles.user}>
                        <img className={styles.userPic} src={UserPic} alt="User Photo" />
                        <div className ={styles.userInfo}>
                            <span className ={styles.userName}>jouzu_jeff</span>
                            <span className = {styles.userLoc}>Maine, USA</span>
                        </div>
                    </div>
                    <div className ={styles.images}>
                        Images
                    </div>
                    <div className={styles.options}>
                        <div className={styles.langOptions}>
                        <LangButton  onClick={handleEN} lang='EN' toggle={isJP ? false : true}/>
                        <LangButton  onClick={handleJP} lang='JP' toggle={isJP ? true : false}/>
                        </div>
                        <div className={styles.reportDiv}>
                            <span>Report</span>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.entryText}>aaaaaaaa</p>
                </div>
              
            </div>
            <div className={styles.date}>
                <span className={styles.day}>05</span>
                <div className={styles.month}>
                    <span>09</span>
                    <span className={styles.gatsu}>月</span>
                </div>
                <span className={styles.year}>2024</span>
            </div>
        </div>
    )
  
}

CommuEntry.propTypes = {
}

export default CommuEntry