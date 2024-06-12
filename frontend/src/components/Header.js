import { Link } from 'react-router-dom'
import logo from '../assets/images/NJ_Logo.svg'
import UserIcon from '../assets/images/user.svg'
import DropdownNavButton from './DropdownNavButton/DropdownNavButton'

const Header = () => {

    return (
        <header>
            <div className="header">
                <Link to = "/">
                    <img src={logo} alt="NichiJournal" className="logo" />
                </Link>
                <div className="nav">
                    <DropdownNavButton 
                        items={[
                            ['Login', '/login'],
                            ['Signup', '/signup'],
                            ['Account', '/account'],
                            ['Logout', '/logout'],
                        ]}
                        icon={UserIcon} alt='User'/>
                </div>
            </div>
        </header>
    )
  
}

export default Header