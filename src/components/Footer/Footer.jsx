import React from 'react'
import {
    FaAndroid,
    FaAppStoreIos,
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaMapMarker,
    FaMousePointer,
    FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
        {/* upper section banner */}
        <div className='bg-pink-400'>
            <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
                <p>WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS-A-WEEK!</p>
                <h1 className='text-3xl md:text-5xl font-bold'>+234 814 657 839</h1>
            </div>
        </div>

        {/* bottom footer section */}
        <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12'>
            {/* first column section */}
            <div className="space-y-6">
                {/* heading */}
                <h1 className='txt-2xl py-3 font-bold uppercase border-b-8 border-pink-400'>
                    About Bult Ride
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam vitae ipsam ea eum nulla voluptatem ullam suscipit, quas ipsum. 
                    Voluptas aspernatur quis nulla! Voluptas nobis sint sed aut qui rerum. Voluptas aspernatur quis nulla! Voluptas nobis sint sed aut qui rerum
                </p>
                {/* social links */}
                <div className="flex items-center text-pink-400 gap-3 text-2xl">
                    <FaFacebook />
                    <FaInstagram />
                    <FaGoogle />
                    <FaTwitter />
                </div>
            </div>

            {/* second column section */}
            <div className='space-y-6'>
                <h1 className='txt-2xl py-3 font-bold uppercase border-b-8 border-pink-400'>
                    Download
                </h1> 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam vitae ipsam ea eum nulla voluptatem ullam suscipit, quas ipsum. 
                    Voluptas aspernatur quis nulla! Voluptas nobis sint sed aut qui rerum
                </p>
                <h1 className='text-pink-400 text-xl font-semibold flex items-center gap-4'> 
                    Android user{" "}
                    <span>
                        <FaAndroid className='text-2xl text-black dark:text-white' />
                    </span>
                </h1>
                <h1 className='text-pink-400 text-xl font-semibold flex items-center gap-4'> 
                    Ios user{" "}
                    <span>
                        <FaAppStoreIos className='text-2xl text-black dark:text-white' />
                    </span>
                </h1>
            </div>

             {/* third column section */}
             <div className="space-y-6">
                {/* heading */}
                <h1 className='txt-2xl py-3 font-bold uppercase border-b-8 border-pink-400'>
                    Contact
                </h1>
                <div className="flex items-center gap-4">
                    <FaMapMarker /> 91, Ferdinard Street, Ikeja, Lagos, Nigeria
                </div>
                <div className="flex items-center gap-4">
                    <MdCall /> +234 814 657 839
                </div>
                <div className="flex items-center gap-4">
                    <MdEmail /> bultride@gmail.com
                </div>
                <div className="flex items-center gap-4">
                    <FaMousePointer /> www.bultride.org
                </div>
             </div>
        </div>
        <p className='text-center py-4 text-sm'>
            Copyright 2024. All rights reserved
        </p>
    </div>
  ) 
}

export default Footer