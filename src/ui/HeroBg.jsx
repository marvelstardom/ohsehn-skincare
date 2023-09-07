import React from 'react'
import { navigation } from './navigation'
// import { productBrands } from './brands'
import { Link } from 'react-router-dom'
// import { ProductItems } from './ProductItems'
import { Products } from './Products'

export default function HeroBg() {
    const bgImages = [
        {
            img1: require("../images/dang4dark2.jpg"),
            img2: require("../images/black-bg2.jpg"),
            img3: require("../images/black-bg3.jpg"),
        }
    ]
  return (
    <div className=''>
      {
        bgImages.map((img, index) => {
            return (
                <div id={index} className='h-[590px] flex flex-col items-center justify-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${img.img1})`}}>
                    {
                      navigation.map((nav) => {
                        return (
                          <div id={index}>
                            {nav.href === "/shop" ? <h1 className='text-8xl font-bold text-white'>{nav.name}</h1> : null}
                          </div>
                        )
                      })
                    }
                </div>
            )
        })
      }
      <div className='grid grid-cols-5'> 
        {
          Products.map((product) => {
            return (
              <div className='mb-2 mt-1' key={product.brandName}>
                  {
                    Object.entries(product.productImg).map(([key, value]) => (
                      <Link to={`/shop/${product.brandName}`}>
                        <ul className='cursor-pointer'>
                          <li key={key} style={{backgroundImage: `url(${value.img1})`}} className='bg-center bg-cover bg-no-repeat text-white dark:text-black border-r-4 flex items-center justify-center w-full p-16 h-[150px]'>
                              <h1 className='font-bold text-4xl'>{product.brandName}</h1>
                          </li>
                        </ul>
                      </Link>
                    ))
                  }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
