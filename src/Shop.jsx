import React from 'react'
import { useState, useEffect } from 'react'
import HeroBg from './ui/HeroBg'
import { ProductItems } from './ui/ProductItems'
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact'

export default function Shop() {
  const [featuredItems, setFeaturedItems] = useState(ProductItems)
    
    useEffect(() => {
        setFeaturedItems(featuredItems)
    }, [featuredItems])

  return (
    <section>
      <HeroBg />
      <div className='py-32 px-24 flex flex-row flex-wrap gap-8'>
        {
          featuredItems.map((productItem, index) => (
            <div key={index} className='flex flex-row gap-8 flex-wrap'>
              {/* <h1 className='mb-6 text-left font-bold text-5xl'>{productItem.brandName}</h1> */}
              <div key={index} className="mb-5 flex flex-row gap-4 max-w-[19rem] w-full bg-white rounded-lg border border-gray100 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">

              { productItem.productImg.map((image, index) => {
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
                          )})
                      }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
