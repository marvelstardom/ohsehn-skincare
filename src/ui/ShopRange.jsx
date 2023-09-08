import React from 'react'
import { shopList } from './shopList'

export default function ShopRange() {
  return (
    <section className='bg-white lg:pt-32 pt-24'>
        <div>
            <h1 className='text-black font-bold lg:text-6xl text-4xl mb-4'>Shop Our Range</h1>
             <p className='uppercase text-gray-600 text-sm mb-10'>Facial Care  //  Skincare  //  Essentials </p>
            <div className='lg:grid lg:grid-cols-2'>
                {
                    shopList.map((shop, index) => {
                        return (
                            <div className='flex flex-col' style={{ background: `rgba(${81}, ${57}, ${150},${0.738})` }}>
                                <div key={index} style={{ backgroundImage: `url(${shop.bgImg})`}} className='bg-cover bg-no-repeat bg-center lg:h-[400px] h-[200px] lg:flex lg:flex-col flex flex-col justify-center items-center'>
                                    <h1 className='font-bold lg:text-5xl sm:text-3xl text-3xl mb-4 text-white'>{shop.productName}</h1>
                                    <a href='/shop' className='border-2 px-2 py-1 lg:px-4 lg:py-2 rounded-full lg:text-xl sm:text-xl text-white hover:text-white hover:border-black hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Shop Now</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
