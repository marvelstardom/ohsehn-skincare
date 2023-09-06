import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './ui/NavBar'
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

  return (
        <div className="App">
          <NavBar />
          <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
                  <Route exact path='/shop' element={< Shop />}></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
        </div>
  );
}

export default App;
