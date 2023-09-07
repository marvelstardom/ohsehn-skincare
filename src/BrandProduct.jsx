import React, { useState, useEffect } from 'react'
// import { productBrands } from './ui/brands'
import { ProductItems } from './ui/ProductItems'
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact'
// import { Products } from './ui/Products'
// import axios from 'axios'

export default function BrandProduct() {
  // const [title, setTitle] = useState("")
  const [featuredItems, setFeaturedItems] = useState(ProductItems)
    
    useEffect(() => {
        setFeaturedItems(featuredItems)
    }, [featuredItems])

  const bgImages = [
        {
            img1: require("./images/dang5dark2.png"),
            img2: require("./images/black-bg2.jpg"),
            img3: require("./images/black-bg3.jpg"),
        }
    ]
    // useEffect(() => {
    //   axios.get(`http://localhost:3000/shop/${ProductItems.id}`).then((res => [
    //         setTitle(res.title),
    //       ]))
    //       .catch(error=>console.log(error))
    // }, [title])

  return (
    <div id='brand'>
        {
          bgImages.map((image, index) => (
            <div key={index} className='h-[600px] flex items-center justify-center bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${image.img1})`}}>
              <div>
                {/* <h1>{Object.keys(Products)}</h1> */}
                {/* <h1>{title}</h1> */}
              </div>
              <div className=''>
              {
                ProductItems
                .map((product) => (
                  <div key={product.brandName} className=''>
                    {
                      product.id.valueOf(1) === "dang" ? <h1 className='font-bold text-8xl text-white'>{product.brandName}</h1> : null
                    }
                  </div>
                ))
              }
              </div>
              
            </div>
          ))
        }
        <div className='py-32 px-24'>
          <h1 className='font-bold text-5xl text-left mb-16'>Dang Products in stock</h1>
          <div className='flex flex-row flex-wrap gap-8'>
            { featuredItems.map((productItem, index) => (
            <div key={index} className=''>
              <div className="mb-5 flex flex-row gap-2 max-w-[19rem] w-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-2xl dark:border-[#1b2e4b] dark:bg-black dark:shadow-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              { productItem.brandName === "Dang" ? productItem.productImg.map((image, index) => {
                          return (
                              <div key={index} className="py-7 px-6 text-left">
                                  <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[250px] overflow-hidden">
                                      <img src={image.img1} alt="cover" className="w-full h-[250px] bg-center bg-center" />
                                  </div>
                                  <h5 className="text-[#3b3f5c] text-xl text-left font-semibold mb-4 dark:text-white-light">{productItem.name}</h5>
                                  <ReadMoreReact className="text-left" text={productItem.shortDescription} min={50} ideal={100}max={300} readMoreText={<a href='/' className='cursor-pointer text-gray-400'>Read More</a>} />
                                  <p className='text-gray-800 text-left mt-6'>Category: <b>{productItem.category}</b> </p>
                                  <p className='text-gray-800 text-left mb-2'>Price: <b>{productItem.price}</b></p>
                                  <div className='flex flex-col justify-center'>
                                      <button type="button" className="flex flex-row justify-center items-center bg-black px-6 py-2 text-white border border-black rounded-lg hover:bg-white hover:text-black mt-6">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                                      <p>Add To Cart</p>
                                  </button>
                                  </div>
                              </div>
                          )}) : null
                      }
              </div>
            </div>
          ))
        }
          </div>
        </div>
    </div>
  )
}
