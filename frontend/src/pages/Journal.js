import Entry from '../components/Entry/Entry'
import CalendarNav from '../components/CalendarNav/CalendarNav'

const Journal = () => {
    return(
      <div className="journal">
          <CalendarNav />
          <Entry />
      </div>
    )
  }
  
  export default Journal