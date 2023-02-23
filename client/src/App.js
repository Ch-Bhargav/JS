/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import Login from './components/Login';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JobPage from './components/JobPage'
import AboutUs from './components/aboutus'

function App() {
  return(
    <div className="App">
<ResponsiveAppBar />
        <div>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/log' element={<Login />} />
                <Route path='/hom' element={<Home />} />
                <Route path='/job' element={<JobPage />} />
                <Route path='/abo' element={<AboutUs />} />
              </Routes>
            </BrowserRouter>
        </div>
      
    </div>
  );
}

export default App;