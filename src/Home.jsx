import React from 'react'
import { Slider } from './ui/Slider';
import FeaturedProducts from './ui/FeaturedProducts';
import ShopRange from './ui/ShopRange';
import Footer from './ui/Footer';
import Testimonials from './ui/Testimonials';

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts/>
      <ShopRange/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
