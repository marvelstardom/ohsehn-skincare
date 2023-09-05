import React from 'react';
import './App.css';
import NavBar from './ui/NavBar'
import { Slider } from './ui/Slider';
import FeaturedProducts from './ui/FeaturedProducts';
import ShopRange from './ui/ShopRange';
import Footer from './ui/Footer';
import Testimonials from './ui/Testimonials';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <FeaturedProducts/>
      <ShopRange/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
