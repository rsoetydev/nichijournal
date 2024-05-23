import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './Entry.module.css'
import LangButton from '../LangButton/LangButton'
import ShareIcon from '../../assets/images/share.svg'
import DeleteIcon from '../../assets/images/delete.svg'
import DeleteIconHover from '../../assets/images/delete_hover.svg'


const Entry = (props) => {

    const [over, setOver] = useState(false);

    return(
        <div className={styles.row}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <p className={styles.entryText}>aaaaaaaa</p>
                    <img 
                        onMouseOver={() => setOver(true)}
                        onMouseOut={() => setOver(false)}
                        className={styles.delete} 
                        src={over ? DeleteIconHover : DeleteIcon} 
                        alt="delete" 
                    />
                </div>
                <div className={styles.options}>
                    <div className={styles.langOptions}>
                        <LangButton lang='EN'/>
                        <LangButton lang='JP'/>
                    </div>
                    <div className={styles.shareDiv}>
                        <span>Share</span>
                        <img className={styles.shareIcon} src={ShareIcon} alt="Share" />
                    </div>
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

Entry.propTypes = {
}

export default Entry