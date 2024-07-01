import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Journal from './pages/Journal'
import Community from './pages/Community'
import CreateEntry from './pages/CreateEntry'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Logout from './pages/Logout'

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PopoutBar from './components/PopoutBar';
import Footer from './components/Footer'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Sidebar />
          <div className='pages-container'>
            <div className="pages">
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/journal"
                  element={<Journal />}
                />
                <Route
                  path="/entry"
                  element={<CreateEntry />}
                />
                <Route
                  path="/community"
                  element={<Community />}
                />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/" />}
                />
                <Route
                  path="/logout"
                  element={user ? <Logout /> : <Navigate to="/" />}
                />

              </Routes>
            </div>
            <Footer />
          </div>
          <PopoutBar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
