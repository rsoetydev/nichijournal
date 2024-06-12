import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './MenuDropdown.module.css'


const MenuDropdown = (props) => {
    
    let open = false;

    if (props.open == true){
        open = true
    } else open = false

    const menuItems = props.items.map((item, index) => <Link key={index} to={item[1]}><li>{item[0]}</li></Link>)

    return(
        <div className={`${styles.dropdownContainer} ${open ? styles.dropOpen : null}`} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <ul>{menuItems}</ul>
        </div>

    )
  
}

MenuDropdown.propTypes = {
}

export default MenuDropdown