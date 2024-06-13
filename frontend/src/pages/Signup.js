import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, email, password)
  }

  return (

  <div className="signup">
    <div className="header">
        <h1>SIGNUP</h1>
    </div>
    <form className = "signup-form" onSubmit = {handleSubmit}>
        <label>Username:</label>
        <input 
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
        <label>Email:</label>
        <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        <label>Password</label>
        <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />

        <button disabled={isLoading}>Sign Up</button>
        {error && <div className="error">{error}</div>}
        <span>Already have an account?<br /><Link to="/login">Login here!</Link></span>
    </form>
</div>
    
  )
}

export default Signup

