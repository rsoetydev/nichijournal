import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, password)
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

          <button>Login</button>

          <span>Don't have an account?<br /><Link to="/signup">Signup for free!</Link></span>
  </form>

</div>
  )
}

export default Login

