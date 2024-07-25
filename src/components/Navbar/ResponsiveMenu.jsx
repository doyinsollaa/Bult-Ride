import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import Link from 'next/link'


const Navlinks = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Features', link: '/features' },
    { id: 4, name: 'Blog', link: '/blog' },
    { id: 4, name: 'Contact', link: '/contact' }
];

const ResponsiveMenu = ({ showMenu}) => {
  return (
    <div 
      className={`${showMenu ? "left-0" : "-left-[100%]" } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-md`}>

        <div>
            {/* user top section */}
            <div className="flex items-center justify-start gap-3">
                <FaUserCircle className='text-5xl' />
                <div>
                <h1>Hello User</h1>
                <h1 className='text-sm text-slate-500'>Premium User</h1>
                </div>
            </div>

            {/* Navigation links section  */}
            <nav className='mt-12'>
                <ul>
                    {Navlinks.map(({ id, name, link }) => {
                        return(
                            <li key={id} className='py-4'>
                                <Link 
                                    href={link} 
                                    className={'text-lg font-medium text-black dark:text-white duration-300'}>
                                    {name} 
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div> 

        {/* bottom footer section  */}
        <div className="footer text-sm">
            <h1>
                Made with love by <a href=''>Dodo</a>{" "}
            </h1>
        </div>
    </div>
  )
}

export default ResponsiveMenu