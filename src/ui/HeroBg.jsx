import React from 'react'
import { navigation } from './navigation'
import { productBrands } from './brands'
import { Link } from 'react-router-dom'

// import { ProductItems } from './ProductItems'

export default function HeroBg() {
  // const productBrands = ["Uncover", "Dang", "Konyin", "Arami", "Okunriin"]
    const bgImages = [
        {
            img1: require("../images/konyin2.jpg"),
            img2: require("../images/black-bg2.jpg"),
            img3: require("../images/black-bg3.jpg"),
        }
    ]
  return (
    <div className=''>
      {
        bgImages.map((img, index) => {
            return (
                <div id={index} className='h-[600px] flex flex-col items-center justify-center' style={{backgroundImage: `url(${img.img1})`}}>
                    {
                      navigation.map((nav) => {
                        return (
                          <div id={index}>
                            {nav.name ? <h1 className='text-6xl font-bold'>{nav?.name}</h1> : null}
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
          productBrands.map((product, id) => {
            return (
              <ul className='' key={id.toString()}>
                    <li className='bg-black text-white dark:text-black border-r border-white dark:bg-gray-400 w-full p-6'>
                  <Link to={`/shop/${product.name}`}><h1>{product.name}</h1></Link>
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}
