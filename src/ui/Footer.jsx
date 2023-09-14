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
                    <div className="lg:py-16 lg:px-24 py-8 px-12 bg-black bg-cover bg-no-repeat bg-center">
                        <div key={index} className='lg:grid lg:grid-cols-4 justify-between gap-x-6'>  
                            <div className='text-left text-white'>
                                <h1 className='text-2xl mb-4'>Get the Goods</h1>
                                <p className='text-sm mb-3'>Enter your email to receive updates on launches and promotions. NO spam, we promise.</p>
                                <div className='flex flex-row justify-between py-2 px-3 bg-white border border-black rounded-lg'>
                                    <input type='email' placeholder='email address' className='w-full text-gray-800 placeholder-none border-none contrast-more:border-none contrast-more:placeholder-none'/>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black "><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg></button>
                                </div>

                                {/* <h1 className='font-bold text-3xl'>Ohsehn</h1>
                                <p className='text-sm'><i>Your Original Skincare Store!</i></p>
                                <p className='mt-8 lg:mb-0 mb-8 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias vitae nobis unde aut libero quasi necessitatibus quaerat fugiat, maiores voluptates? Commodi voluptates quisquam ullam vero ab provident neque accusamus.</p> */}
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-left text-white mb-8 border-l-2'>
                                    <div className='ml-4'>
                                        <h1 className='font-bold text-xl lg:mb-4 lg:ml-0'>Links</h1>
                                        <ul key="index" className='flex flex-col text-sm gap-2'>
                                            <li><a href='/'><p>Home</p></a></li>
                                            <li><a href='/about'><p>About</p></a></li>
                                            <li><a href='/shop'><p>Shop</p></a></li>
                                            <li><a href='/'><p>Shipping Policy</p></a></li>
                                            <li><a href='/'><p>Refund Policy</p></a></li>
                                            <li><a href='/contact'><p>Contact</p></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start mt-0'>
                                <div className='text-left text-white border-l-2 mt-0'>
                                    <div className='ml-4'>
                                        <h1 className='font-bold text-xl mb-4 mt-0'>Support</h1>
                                        <ul className='flex flex-col gap-2 text-sm'>
                                            <li><p>Corporate Gifting</p></li>
                                            <li><p>Manage Order</p></li>
                                            <li><p>Refer a Friend</p></li>
                                            <li><p>Support</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start mt-0'>
                                <div className='text-left text-white border-l-2 mt-0'>
                                    <div className='ml-4'>
                                        <h1 className='font-bold text-xl mb-4 mt-0'>Contact</h1>
                                        <ul className='flex flex-col gap-2 text-sm'>
                                            <li><p>info@ohsehn.com</p></li>
                                            <li><p>3500 South DuPont Hwy Suite 101, DE 19901</p></li>
                                            <li><p>Connect on LinkedIn.</p></li>
                                            <li><p>Wholeslaes Inquiries (soon)</p></li>
                                            <li><p>Phone: +23474899501</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}
