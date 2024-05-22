import PropTypes from 'prop-types'
import styles from './Entry.module.css'
import LangButton from '../LangButton/LangButton'


const Entry = (props) => {

    return(
        <div className={styles.row}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <p className={styles.entryText}>aaaaaaaaa</p>
                    <img className={styles.delete} src="" alt="delete" />
                </div>
                <div className={styles.options}>
                    <div className={styles.langOptions}>
                        <LangButton lang='EN'/>
                        <LangButton lang='JP'/>
                    </div>
                    <div className={styles.shareDiv}>
                        <span>Share</span>
                        <img className={styles.shareIcon} src="" alt="Share" />
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