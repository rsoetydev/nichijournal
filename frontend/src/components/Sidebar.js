import { Link } from 'react-router-dom'
import NavButton from './NavButton/NavButton'
import UsersIcon from '../assets/images/users.svg'
import PencilIcon from '../assets/images/pencil_writing_thin.svg'
import JournalIcon from '../assets/images/book.svg'

const Sidebar = () => {

    return (
        <div className="sidebar-nav">
            <Link to="/entry">
                <NavButton icon={PencilIcon} alt="Create Entry" />
            </Link>
            <Link to="/journal">
                <NavButton icon={JournalIcon} alt="View Journal" />
            </Link>
            <Link to="/community">
                <NavButton icon={UsersIcon} alt="Community" />
            </Link>
        </div>
    )
  
}

export default Sidebar