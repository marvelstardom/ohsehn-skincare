import React, { useEffect } from 'react'
import { useState } from 'react'
import { shopList } from './shopList'
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact'

export default function FeaturedProducts() {
    const [featuredItems, setFeaturedItems] = useState(shopList)
    const [featuredImages, setFeaturedImages] = useState(shopList)
    
    useEffect(() => {
        setFeaturedItems(featuredItems)
        setFeaturedImages(featuredImages)
    }, [featuredItems, featuredImages])
    
  return (
    <section className='bg-gray-950 py-36'>
        <div>
            <h1 className='text-white font-bold text-6xl mb-4'>Featured Products</h1>
            <p className='uppercase text-gray-400 text-sm mb-16'>Beauty  //  Original  //  Elegance & More </p>
            <div className="mx-12 flex flex-row flex-wrap gap-6 justify-center">
                {
                    featuredImages.map((item, index) => (
                        <div key={index} className="mb-5 flex flex-row gap-4 max-w-[19rem] w-full bg-white rounded-lg border border-white border-black dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            { item.productImg?.map((img, index) => {
                                return (
                                    <div className="py-7 px-6">
                                        <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[200px] overflow-hidden" key={index}>
                                            <img src={img.img1} alt="cover" className="w-full h-[250px] bg-center bg-cover" />
                                        </div>
                                        <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">{item.productName}</h5>
                                        <ReadMoreReact text={item.slug} min={50} ideal={100}max={120} readMoreText={<a href='/' className='cursor-pointer text-blue-800'>Read More</a>} />
                                        <button type="button" className="bg-black px-4 py-2 text-white border-2 border-black rounded-lg hover:bg-white hover:text-black mt-6">
                                            Explore More
                                        </button>
                                    </div>
                                )})
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
