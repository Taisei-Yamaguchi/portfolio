import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

import Home from './pages/Home';
import About from './pages/About';
import Deliverables from './pages/Deliverables';
import Skills from './pages/Skills';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* container */}
        <div className='pt-20'>
          <div className='flex border max-md:flex-col'>
            <div className='w-full'>
              <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/about"  element={<About />} />
                <Route path="/deliverables"  element={<Deliverables />} />
                <Route path="/skills"  element={<Skills />} />
              </Routes>
            </div>
            <div >
              <SideBar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
