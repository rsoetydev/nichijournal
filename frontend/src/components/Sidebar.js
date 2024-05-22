import { Link } from 'react-router-dom'
import NavButton from './NavButton/NavButton'
import UsersIcon from '../assets/images/users.svg'
import PencilIcon from '../assets/images/pencil_writing_thin.svg'
import JournalIcon from '../assets/images/book.svg'

const Sidebar = () => {

    return (
        <div className="sidebar-nav">
            <NavButton icon={PencilIcon} alt="Create Entry" />
            <NavButton icon={JournalIcon} alt="View Journal" />
            <NavButton icon={UsersIcon} alt="Community" />
        </div>
    )
  
}

export default Sidebar