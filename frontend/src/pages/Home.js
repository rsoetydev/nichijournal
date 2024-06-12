import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div className="home">
      <div className='header'>
        <h1>NichiJournal: Language Exchange Journal</h1>
        <div className='btn-container'>
          <Link to='/signup'><button>Signup</button></Link>
          <Link to='/login'> <button>Login</button></Link>
        </div>
      </div>
      
      <div className='home-body'>

        <h2>Discover NichiJournal</h2>
        <p>NichiJournal combines the art of journaling with the benefits of language exchange, 
          offering a free and interactive way to improve your language skills.</p>
        <div>
          <h3>Create Your Free Account</h3>
          <ul>
            <li>Sign up quickly and easily to start your language learning journey.</li>
            <li>Maintain a private journal to practice Japanese or English.</li>
          </ul>
        </div>
        <div>
          <h3>Practice Makes Perfect</h3>
          <ul>
            <li>Engage in daily or weekly journaling to strengthen your language abilities.</li>
            <li>Track your progress and witness your language skills flourish over time.</li>
          </ul>
        </div>
        <hr />
        <h2>Share and Learn</h2>
        <div>
          <h3>Community Journal</h3>
          <ul>
            <li>Share your journal entries with the community to receive valuable feedback.</li>
            <li>Read, comment on, and learn from entries written by other users.</li>
            <li>Gain insights into cultural nuances and native expressions.</li>
          </ul>
        </div>
        <div>
          <h3>Feedback and Interaction</h3>
          <ul>
            <li>Receive constructive comments on your entries to refine your language use.</li>
            <li>Help others by providing feedback on their entries.</li>
          </ul>
        </div>
        <hr />
        <h2>Powerful Tools</h2>
        <div>
          <h3>Dictionary Lookup</h3>
          <ul>
            <li>Easily look up English and Japanese words while writing your journal entries.</li>
            <li>Expand your vocabulary quickly from the sidebar.</li>
          </ul>
        </div>
        <hr />
        <h2>Why NichiJournal?</h2>
        <div>
          <h3>Bilingual Platform</h3>
          <ul>
            <li>Switch effortlessly between Japanese and English interfaces.</li>
            <li>Perfect for learners of all levels, from beginners to advanced speakers.</li>
          </ul>
        </div>
        <div>
          <h3>Safe and Supportive Community</h3>
          <ul>
            <li>Join a community of like-minded individuals passionate about language learning.</li>
            <li>Share your journey in a positive and encouraging environment.</li>
          </ul>
        </div>
        <div>
          <h3>Free to Use</h3>
          <ul>
            <li>Enjoy all the features of NichiJournal without any cost.</li>
            <li>No hidden fees, just pure language learning.</li>
          </ul>
        </div>
        <div>
        <hr />
          <h2>Start Your Language Exchange Journey Today</h2>
          <p>Creating your free account is the first step towards improving your language skills. Join NichiJournal today and become a part of a global community dedicated to language learning and cultural exchange.</p>
        </div>
        
      <div className='btn-container'>
        <Link to='/signup'><button>Signup</button></Link>
        <Link to='/login'> <button>Login</button></Link>
      </div>
      </div>
    </div>
    
  )
}

export default Home