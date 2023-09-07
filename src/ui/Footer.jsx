import React from 'react'

export default function Footer() {
    const bgImages = [
        {
            img1: require("../images/black-bg.jpg"),
            img2: require("../images/black-bg2.jpg"),
            img3: require("../images/black-bg3.jpg"),
        }
    ]
  return (
    <section>
        {
            bgImages.map((img, index) => {
                return (
                    <div className="py-16 px-24 bg-black bg-cover bg-no-repeat bg-center" 
                    // style={{backgroundImage: `url(${img.img2})`}}
                    >
                        <div key={index} className='grid grid-cols-3 justify-start gap-x-12'>  
                            <div className='text-left text-white'>
                                <h1 className='font-bold text-3xl'>Ohsehn</h1>
                                <p className='text-sm'><i>Your Original Skincare Store!</i></p>
                                <p className='mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias vitae nobis unde aut libero quasi necessitatibus quaerat fugiat, maiores voluptates? Commodi voluptates quisquam ullam vero ab provident neque accusamus.</p>
                            </div>
                            <div className='text-left text-white flex flex-col justify-start items-center'>
                                <h1 className='font-bold text-xl mb-6 -ml-5'>Links</h1>
                                <ul key="index" className='flex flex-col gap-4'>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/about'>About</a></li>
                                    <li><a href='/shop'>Shop</a></li>
                                    <li><a href='/contact'>Contact</a></li>
                                </ul>
                            </div>
                            <div className='text-left text-white'>
                                <h1 className='font-bold text-xl mb-6'>Address</h1>
                                <ul className='flex flex-col gap-4'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae natus dicta, voluptates tenetur assumenda ab molestiae.</li>
                                    <li>Phone: +23474899501</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}
