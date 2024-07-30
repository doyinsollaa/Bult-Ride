import React from 'react'
import Slider from "react-slick";
import BgImage from "../../assets/testimonial.jpg"

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
};

 const TestimonialData = [
    {
        id: 1,
        name: "Anita",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, vitae. Expedita excepturi ipsa porro, ea quo corrupti. Excepturi amet ullam.",
        img: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
    },
    {
        id: 2,
        name: "Timmy",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, vitae. Expedita excepturi ipsa porro, ea quo corrupti. Excepturi amet ullam.",
        img: "https://media.proprofs.com/images/QM/user_images/2503852/-Type-Of-Person-.webp",
    },
    {
        id: 3,
        name: "Prince",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, vitae. Expedita excepturi ipsa porro, ea quo corrupti. Excepturi amet ullam.",
        img: "https://media.istockphoto.com/id/1165314750/photo/living-that-urban-life.webp?b=1&s=170667a&w=0&k=20&c=NEzLBfPNT75-XAYKCza3PZqOegH_cehKs7egty3TmD0=",
    },
    {
        id: 4,
        name: "Anthony",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, vitae. Expedita excepturi ipsa porro, ea quo corrupti. Excepturi amet ullam.",
        img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
    },
    {
        id: 5,
        name: "Precious",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, vitae. Expedita excepturi ipsa porro, ea quo corrupti. Excepturi amet ullam.",
        img: "https://media.istockphoto.com/id/1196391449/photo/portrait-of-african-woman.jpg?s=612x612&w=0&k=20&c=b-hwtJGyg5Y-hwG-9id9D3hb71TmaqyDlfU-Ps3GA2s=",
    },
 ]; 

const Testimonial = () => {
      
    // slider configuration
    const settings ={
        dots: true,
        arrows: false,
        infinte: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinte: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initailSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

  return (
    <div style={bgStyle}>
        <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
            <div className="container">
                {/* header section */}
                <div data-aos="fade-up" className='text-center mb-10'>
                    <h1 className='text-4xl font-bold'>
                        Testimonials
                    </h1>
                </div>

                {/* testimonial card section */}
                 <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map(({id, name, text, img}) =>{
                            return(
                                <div key={id} className='my-6'>
                                    <div className="flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative">
                                        {/* content section */}
                                        <div className="flex flex-col items-center gap-4">
                                            <p className='text-xs'>{text}</p>
                                        </div>
                                        {/* image section */}
                                        <div className='flex items-center gap-4'>
                                            <img 
                                            src={img} 
                                            alt={name}
                                            className="rounded-full w-16 h-16"
                                            />
                                            <div>
                                                <h1 className='text-xl font-bold text-black/60 dark:text-pink-400 font-cursive'>
                                                {name}
                                                </h1>
                                                <p className='text-sm font-bold text-black/45 dark:text-white'>
                                                BUSINESS MAN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>

                 </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonial