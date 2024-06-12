import PropTypes from 'prop-types'
import styles from './LangButton.module.css'


const LangButton = (props) => {
    let lang = props.lang;

    if(lang === 'JP'){
        lang = '日本語'
    }

    return(
        <button onClick={props.onClick} className={`${styles.button} ${props.toggle ? styles.langActive : null}`}>
            <span>{lang}</span>
        </button>
    )
  
}

LangButton.propTypes = {
    lang: PropTypes.string
}

export default LangButton