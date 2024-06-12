import PropTypes from 'prop-types'
import styles from './KanjiBlock.module.css'
const KanjiBlock = (props) => {

    return(
        <div className={styles.kanjiBlock}>
            <span className ={styles.kanji}>日</span>
            <div className={styles.details}>
                <p className ={styles.definition}>
                    day, sun, Japan, counter for days
                </p>
                <p className ={styles.readings}>
                    Kun: ひ、ーび、ーか<br />
                    On: ニチ、ジツ 
                </p>
            </div>
           
        </div>

    )
  
}

KanjiBlock.propTypes = {
}

export default KanjiBlock