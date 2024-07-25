import React from 'react'
import Img1 from "../../assets/economy.png";
import Img2 from "../../assets/standard.png";
import Img3 from "../../assets/business.png";
import Image from "next/image"

const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: "Economy",
        description: 
           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolore dolorum, minus ex nobis delectus harum quia commodi.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Standard",
        description: 
           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolore dolorum, minus ex nobis delectus harum quia commodi.",
        aosDelay: "300",
    },
    {
        id: 3,
        img: Img3,
        name: "Business",
        description: 
           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolore dolorum, minus ex nobis delectus harum quia commodi.",
        aosDelay: "500",
    },
]

const BestRide = () => {
  return (
    <div className='py-10 bg-white dark:bg-dark text-black dark:text-white'>
        <div className="container">
            {/* header title section */}
            <div data-aos="fade-up" className='text-center mb-20'>
                <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>
                    Choose Best Ride
                </h1>
            </div>

            {/* Best Rid Card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
                {ServicesData.map(({ id, img, name, description, aosDelay }) => {
                    return (
                        <div
                           key={id}
                           data-aos="fade-up"
                           data-aos-delay={aosDelay}
                           className='group rounded-2xl bg-white dark:bg-black hover:!bg-pink-400 shadow-xl duration-200 max-w-[300px] relative'
                        >
                            {/* image section */}
                            <div className='h-[110px]'> 
                                <Image 
                                   src={img} 
                                   alt=''
                                   className='max-w-[250px] block mx-auto transform -translate-y-20
                                   group-hover:scale-110
                                   group-hover:translate-x-4 duration-300'
                                />
                            </div>

                            {/* text content section */}
                            <div className='p-4 text-center space-y-4'>
                                <h1 className='text-xl font-bold'>{name}</h1>
                                <p className='text-gray-500 group-hover:text-black duration=300 text-sm line-clamp-2'>{description}</p>
                                <p className='text-pink-400 text-2xl font-bold group-hover:text-black'>
                                    N5000/km
                                </p>
                                <button className='bg-black text-white px-4 py-2 rounded-lg'>
                                    Read More
                                </button>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div> 
    </div>
  ) 
}

export default BestRide