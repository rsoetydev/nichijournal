import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import logo from '../assets/images/NJ_Logo.svg'
import UserIcon from '../assets/images/user.svg'
import DropdownNavButton from './DropdownNavButton/DropdownNavButton'

const Header = () => {
    const { user } = useAuthContext()
    console.log(user);

    const handleClick = () => {
      console.log("logged out")
    }

    return (
        <header>
            <div className="header">
                <Link to = "/">
                    <img src={logo} alt="NichiJournal" className="logo" />
                </Link>
                {user && (<div className="nav"> 
                    <span>{user.username}</span>
                    <DropdownNavButton 
                        items={[
                            ['Account', '/account'],
                            ['Logout', 'logout'],
                        ]}
                        icon={UserIcon} alt='User'/>
                </div>)}
                {!user && (<div className="nav"> 
                    <DropdownNavButton 
                        items={[
                            ['Login', '/login'],
                            ['Signup', '/signup'],
                        ]}
                        icon={UserIcon} alt='User'/>
                </div>)}
            </div>
        </header>
    )
  
}

export default Header