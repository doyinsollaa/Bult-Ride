"use client";
import React from 'react'
import Image from 'next/image';
import Download from "../../assets/download.jpg"
import AppleStore from "../../assets/appstore.png"
import PlayStore from "../../assets/playstore.png"


const AppStore = () => {
  return (
    <div className='bg-[#f5f5f5] dark:bg-black dark:text-white'>
        <div className="container"> 
            {/* header title section */}
            <div className='space-y-3 uppercase text-center py-14'>
                <p  
                  data-aos="fade-up"
                  className='text-pink-400 text-3xl font-semibold'>
                    Download
                </p>

                <h1 data-aos="fade-up"
                data-aos-delay="300"
                className='text-3xl font-bold'>
                    Quality Ride Service
                </h1>
            </div>

            {/* Card section */}
            <div 
              data-aos="fade-up" 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">

                {/* Text content section */}   
                <div className='space-y-8 max-w-[400px] mx-auto'>
                    <h1 className='text-2xl font-bold'>
                        Download our voucher app free! Get exciting  discount and grand offers
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nobis reprehenderit repellat eligendi, neque iure in commodi ducimus quis voluptates quas.
                    </p>

                    {/* App store image section */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center">
                        <a href='#'>
                            <Image 
                              src={AppleStore}
                              alt=""
                              className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                            />
                        </a>
                        <a href='#'>
                            <Image 
                              src={PlayStore}
                              alt=""
                              className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                            />
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div>
                    <Image src={Download} alt='' className='max-w-[500px]'/>
                </div>
            </div>             

        </div>
    </div>
  )
}

export default AppStore