import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { GiAtomicSlashes } from "react-icons/gi";
import { MdArrowDropDown } from 'react-icons/md';

const MenuNav = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Store",
        link: "/store",
    },
    {
        name: "Toys",
        link: "/toys",
    },
    {
        name: "3D Videos",
        link: "/#videos",
    }
]

const Navbar = () => {
    return (
        <div className='py-4'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <div className='flex items-center gap-x-4'>
                        <GiAtomicSlashes className='text-8xl text-secondary' />
                        <div className='flex flex-col text-2xl font-bold text-gray-600 leading-5'>
                            <span>Go</span>
                            <span>Pal</span>
                        </div>
                    </div>

                    {/* link */}
                    <div className='md:block hidden'>
                        <ul className='center'>
                            {
                                MenuNav.map((item,) => {
                                    return (
                                        <li key={item.name}>
                                            <a href={item.item} className='navlink'>{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* search */}
                    <div className='flex items-center gap-6'>
                        <input type="text"
                            placeholder='Search'
                            className=' px-2 py-2 rounded-full bg-slate-200 hidden sm:block border-primary' />
                        <div className='bg-secondary hover:bg-secondary/80 p-3 rounded-full cursor-pointer'>
                            <FaSearch className='text-white text-sm' />
                        </div>
                        <div className='flex items-center navlink cursor-pointer'>
                            <h2>Eng</h2>
                            <span>
                                <MdArrowDropDown className='text-xl text-primary' />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar

