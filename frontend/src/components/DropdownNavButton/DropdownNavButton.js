import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './DropdownNavButton.module.css'
import NavButton from '../NavButton/NavButton'
import MenuDropdown from '../MenuDropdown/MenuDropdown'


const DropdownNavButton = (props) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return(
        <div className = {styles.dropdownNavContainer}>
            <NavButton onMouseEnter={handleOpen} onMouseLeave={handleClose} open={open} {...props}/>
            <MenuDropdown onMouseEnter={handleOpen} onMouseLeave={handleClose} items={props.items} open={open} />
        </div>
    )
  
}

NavButton.propTypes = {
}

export default DropdownNavButton