import PropTypes from 'prop-types'
import { useState } from 'react'

import styles from './Entry.module.css'

import LangButton from '../LangButton/LangButton'

import ShareIcon from '../../assets/images/share.svg'
import DeleteIcon from '../../assets/images/delete.svg'
import DeleteIconHover from '../../assets/images/delete_hover.svg'


const Entry = (props) => {

    const [over, setOver] = useState(false)
    const date = props.date.split('/')

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
                <div className={styles.content}>
                    <p className={`${styles.entryText} ${isJP ? styles.hidden : null}`}>{props.en_text}</p>
                    <p className={`${styles.entryText} ${isJP ? null : styles.hidden}`}>{props.jp_text}</p>
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
                        <LangButton  onClick={handleEN} lang='EN' toggle={isJP ? false : true}/>
                        <LangButton  onClick={handleJP} lang='JP' toggle={isJP ? true : false}/>
                    </div>
                    <div className={styles.shareDiv}>
                        <span>Share</span>
                        <img className={styles.shareIcon} src={ShareIcon} alt="Share" />
                    </div>
                </div>
            </div>
            <div className={styles.date}>
                <span className={styles.day}>{(date[0]).toString().padStart(2,0)}</span>
                <div className={styles.month}>
                    <span>{(date[1]).toString().padStart(2,0)}</span>
                    <span className={styles.gatsu}>月</span>
                </div>
                <span className={styles.year}>{date[2]}</span>
            </div>
        </div>
    )
  
}

Entry.propTypes = {
}

export default Entry