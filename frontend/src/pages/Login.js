import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const { login, error, isLoading } = useLogin()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(username, password)
    
    navigate('/journal')
  }

  return (

<div className="login">
  <div className="header">
    <h1>LOGIN</h1>
  </div>
  <form className = "login-form" onSubmit = {handleSubmit}>
          <label>Username or Email</label>
          <input 
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
          />
          <label>Password</label>
          <input 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
          />

          <button disabled={isLoading}>Login</button>
          {error && <div className="error">{error}</div>}

          <span>Don't have an account?<br /><Link to="/signup">Signup for free!</Link></span>
  </form>

</div>
  )
}

export default Login

