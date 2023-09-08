import React from 'react'
import { Products } from './ui/Products'
import { number, string } from 'prop-types'
// import { Link } from 'react-router-dom'

export default function SingleProduct() {
  return (
    <section className='pt-36 pb-32 px-24'>
      <div className=''>
        <div>
          {
          Products.map((product) => {
            return (
              <div className='mb-2 mt-1 flex flex-row gap-14' key={product.brandName}>
                <div className='w-1/5'>
                  {
                    Object.entries(product.productType).map(([key, value]) => (
                      <div key={[key]}>
                        {
                          value.productImages.map((item, index) => (
                            <div key={index}>
                              <div className='text-white dark:text-black border-4 flex flex-col mb-4 items-center justify-center w-[200px] h-[180px]'>
                                <img src={item} alt="" />
                              </div>
                            </div>
                          )).at(1)
                        }
                      </div>
                    ))
                  }
                </div>
                <div className='w-auto '>
                  {
                    Object.entries(product.productType).map(([key, value]) => (
                      <div key={[key]}>
                        {
                          value.id === "uncover" &&
                          <div className='flex flex-row items-center justify-start'>
                            <img src={
                          value.productImages.at(1)
                          } alt="" className='w-1/2' />

                          <div className='flex flex-col justify-start items-start'> 
                          <h1 className='font-bold text-3xl mb-2'>{value.name}</h1>
                        <p className='font-bold text-2xl mb-2'>{value.price}</p>
                        <p>Status: {value.stock}</p>
                        <p>Category: {value.category} </p>
                        <p>Quantity: {value.quantity} </p>
                        <p>Colors: {value.colors.map((color) => (<div key={color} className='text-left'>{ color }</div>))} </p>
                        <div className='my-4  text-left'>
                          <h1 className='font-bold text-lg'>Product Description</h1>
                          <p>{value.shortDescription}</p>
                        </div>
                        <div className='flex flex-row justify-start'>
                          <button type="button" className="flex flex-row justify-center items-center bg-black px-6 py-2 text-white border border-black rounded-lg hover:bg-white hover:text-black mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                            <p>Add To Cart</p>
                        </button>
                      </div>
                          </div>
                        
                          </div>
                        }
                      </div>
                    )).at(1)
                  }
                </div>
                {/* <div className='w-1/2 text-left flex flex-col justify-start
                items-center'>
                  {
                    Object.entries(product.productType).map(([key, value]) => (
                      <div key={[key]} className='mb-12'>
                        <h1 className='font-bold text-3xl mb-2'>{value.name}</h1>
                        <p className='font-bold text-2xl mb-2'>{value.price}</p>
                        <p>Status: {value.stock}</p>
                        <p>Category: {value.category} </p>
                        <p>Quantity: {value.quantity} </p>
                        <p>Colors: {value.colors.map((color) => (<div key={color}>{ color }</div>))} </p>
                        <div className='my-4'>
                          <h1 className='font-bold text-lg'>Product Description</h1>
                          {value.shortDescription}
                        </div>
                        <div className='flex flex-row justify-start'>
                          <button type="button" className="flex flex-row justify-center items-center bg-black px-6 py-2 text-white border border-black rounded-lg hover:bg-white hover:text-black mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                            <p>Add To Cart</p>
                        </button>
                      </div>
                      </div>
                    )).at([1])
                  }
                </div> */}
              </div>
              )
            })
          }
        </div>
        <div>

        </div>
        
      </div>
    </section>
  )
}
