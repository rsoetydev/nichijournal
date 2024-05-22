import PropTypes from 'prop-types'
import styles from './NavButton.module.css'


const NavButton = (props) => {

    return(
        <button className={styles.button}>
            <img src={props.icon} alt={props.alt}/>
        </button>
    )
  
}

NavButton.propTypes = {
    icon: PropTypes.object,
    alt: PropTypes.string,
}

export default NavButton