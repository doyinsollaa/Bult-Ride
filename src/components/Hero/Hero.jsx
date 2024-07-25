import React from 'react'
import pinkcar from "../../assets/pinkcar.png"
import bgCity from "../../assets/city.jpg";
import Image from "next/image"

const bgStyle = {
    backgroundImage: `url(${bgCity.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "520px",
    width: "auto",
};

const Hero = () => {
  return (
    <div style={bgStyle}>
        <div className='dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex'>
            <div className='container grid grid-cols-1 place-items-center'>  
                {/* text content section */}
                <div className='text-center space-y-5 py-14'>

                    <p 
                       data-aos="fade-up"
                       className='text-pink-400 text-3xl font-semibold uppercase'>Book Your Ride Now</p>

                    <h1 
                       data-aos="fade-up"
                       data-aos-delay="600"
                       className='text-4xl md:text-6xl font-bold'>+234 814 657 839</h1>
                    <p 
                       data-aos="fade-up"
                       data-aos-delay="1000"
                       className="tracking-[8px] text-base sm:text-xl font-semibold"
                    > 
                      www.bultride.com  
                    </p>
                </div>

                {/* Image section */}
                <div data-aos="zoom-in-right"
                data-aos-duration="1000">
                    <Image src={pinkcar} 
                    alt="pink car"
                    className='max-h-[460px] sm:scale-125 translate-y-10 sm:translate-y-0' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero