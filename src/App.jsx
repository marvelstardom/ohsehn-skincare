import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './ui/NavBar'
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Footer from './ui/Footer';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';
import BrandProduct from './BrandProduct';
import SingleProduct from './SingleProduct';
// import { productBrands } from './ui/brands';
// import { ProductItems } from './ui/ProductItems';
import { Products } from './ui/Products';

function App() {
  const location = useLocation();

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

  // const productBrands = ["Uncover", "Dang", "Konyin", "Arami", "Okunriin"]

  return (
        <div className="App">
          <NavBar />
          <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
                  <Route exact path='/shop' element={< Shop />}></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
                  {
                    Products.map((product) => (
                      <Route key={product.brandName} exact path={`/shop/${product.brandName}`} element={< BrandProduct />}></Route>
                    ))
                  }
                  {
                    Products.map((product) => (
                      <Route key={product.brandName} exact path={`/shop/${product.brandName}/product`} element={< SingleProduct />} ></Route>
                    ))
                  }
          </Routes>  
          <Footer/>
        </div>
  );
}

export default App;
