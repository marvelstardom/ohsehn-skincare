import React from 'react'
import { shopList } from './shopList'

export default function ShopRange() {
  return (
    <section className='bg-white pt-32'>
        <div>
            <h1 className='text-black font-bold text-6xl mb-4'>Shop Our Range</h1>
             <p className='uppercase text-gray-600 text-sm mb-16'>Facial Care  //  Skincare  //  Essentials </p>
            <div className='grid grid-cols-2'>
                {
                    shopList.map((shop, index) => {
                        return (
                            <div className='' style={{ background: `rgba(${81}, ${57}, ${150},${0.738})` }}>
                                <div key={index} style={{ backgroundImage: `url(${shop.bgImg})`}} className='bg-cover bg-no-repeat bg-center h-[400px] flex flex-col justify-center items-center'>
                                    <h1 className='font-bold text-5xl mb-4 text-white'>{shop.productName}</h1>
                                    <a href='/shop' className='border-2 px-4 py-2 rounded-full text-xl text-white'>Shop Now</a>
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
