"use client";
import Link from 'next/link'
import React from 'react'
import DarkMode from './DarkMode';
import {HiMenuAlt3, HiMenuAlt1} from "react-icons/hi"
import ResponsiveMenu from './ResponsiveMenu';
import { usePathname } from 'next/navigation';

const Navlinks = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Features', link: '/features' },
    { id: 4, name: 'Blog', link: '/blog' },
    { id: 4, name: 'Contact', link: '/contact' }
];

const Navbar = () => {

    //  linking the pages to the navbar. this after all the project is done, its the last step
    const pathname = usePathname();

    // toggle menu implementation
    const [showMenu, setShowMenu] = React.useState(false);
    const toggelMenu = () => {
        setShowMenu(!showMenu);
    }
    // 
    return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
        <div className="container py-2 md:py-0">
            <div className="flex items-center justify-between">
                {/* logo section */}
                <Link href="/" className='text-3xl font-bold'>
                  <span>Bult</span>
                  <span className="text-pink-400">Ride</span>
                </Link>

                {/* Desktop Menu section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {Navlinks.map(({id, name, link }) => {
                            // continuation of linking the pages to the nav. the one that was started up there
                            const isActive = pathname ===  link;
                            return(
                                <li key={id} className='py-5'>
                                    <Link 
                                    href={link} 
                                    className={`${ 
                                        isActive ? "bg-pink-400 dark:text-black" : ""
                                    } text-lg font-medium text-black dark:text-white py-2 px-2 rounded-full hover:bg-pink-400 duration-300`}>
                                    {name}
                                    </Link>
                                    
                                </li>
                            )
                        })}
                        {/* Dark mode feature  */}
                        <DarkMode />
                    </ul>
                </div>

                {/* Mobile Menu section */}
                <div className='md:hidden flex items-center gap-4'>
                    <DarkMode />  
                    {showMenu ? (
                        <HiMenuAlt1 
                          onClick={toggelMenu}
                          className='cursor-pointer transition-all'
                          size={30}
                        />
                    ) : (
                        <HiMenuAlt3 
                          onClick={toggelMenu}
                          className='cursor-pointer transition-all'
                          size={30}
                        />
                    )}     
                </div>
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
    </nav>
  )
}

export default Navbar