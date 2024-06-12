import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Journal from './pages/Journal'
import Community from './pages/Community'
import CreateEntry from './pages/CreateEntry'
import Signup from './pages/Signup'
import Login from './pages/Login'

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PopoutBar from './components/PopoutBar';
import Footer from './components/Footer'

function App() {
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
                  element={<Login />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
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
