import React from 'react'
import BgImage from "../../assets/woman.jpg";
import BannerCard from './BannerCard';
import { SlStar } from "react-icons/sl";

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "no-repeat",
    backgroundRepeat: "no-repeat",
    minHeight: "520px",
    width: "auto",
};


const About = () => {
  return ( 
    <div style={bgStyle}>
        <div className="text-white bg-black/80 min-h-[530px] flex py-10 items-center">
            <div className="container">
                {/* header title section */}
                <div className='space-y-3 uppercase text-center py-14'>
                    <p  data-aos="fade-up"
                        className='text-pink-400 text-3xl font-semibold'>We Provide Quality Service 
                    </p>
                    <h1 
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className='text-3xl font-bold'>
                            To Satisfy You
                    </h1>
                </div>

                {/* card sections */}
                <div 
                   data-aos="fade-up"
                   data-aos-delay="300"
                   className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <div className="space-y-8">
                        <BannerCard 
                           title={"Fast Booking"}
                           description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                           }
                           icon={<SlStar />}
                        />
                        <BannerCard 
                           title={"Fast Booking"}
                           description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                           }
                           icon={<SlStar />}
                        />
                    </div>

                    <div className="space-y-8">
                    <BannerCard 
                           title={"Fast Booking"}
                           description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                           }
                           icon={<SlStar />}
                        />
                        <BannerCard 
                           title={"Fast Booking"}
                           description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                           }
                           icon={<SlStar />}
                        />
                    </div>
                </div>

            </div> 

        </div>

    </div>
  )
}

export default About;