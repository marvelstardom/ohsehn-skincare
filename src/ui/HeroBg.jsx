import React from 'react'
import { navigation } from './navigation'
// import { ProductItems } from './ProductItems'

export default function HeroBg() {
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
                <div key={index} className='h-[400px]' style={{backgroundImage: `url(${img.img1})`}}>
                    {
                      navigation.map((nav) => {
                        return (
                          <div key={index}>
                            {nav.name ? <h1 className='text-6xl font-bold'>{nav.name}</h1> : null}
                          </div>
                        )
                      })
                    }
                </div>
            )
        })
      }
    </div>
  )
}
