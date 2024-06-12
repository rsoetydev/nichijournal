import PropTypes from 'prop-types'
import styles from './NavButton.module.css'


const NavButton = (props) => {

    let open = false;

    if (props.open == true){
        open = true
    } else open = false

    return(
        <button className={`${styles.button} ${open ? styles.navOpen : null}`} {...props}>
            <img src={props.icon} alt={props.alt}/>
        </button>
    )
  
}

NavButton.propTypes = {
}

export default NavButton