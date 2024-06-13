import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';

const Logout = () => {
  const navigate = useNavigate()
  const { logout } = useLogout()

  useEffect(() => {
    logout()
    navigate('/')
  }, [])


  return (
    <></>
  )
}

export default Logout

