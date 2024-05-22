import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Journal from './pages/Journal'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PopoutBar from './components/PopoutBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Sidebar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Journal />}
              />
            </Routes>
          </div>
          <PopoutBar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
