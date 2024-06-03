import React from 'react'
import { FiHome } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiBriefcase } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import { FiGrid } from 'react-icons/fi';
import { FiCompass } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';

const Navbar = () => {


  return (
    <div className='w-full mt-[4vh] h-[5vh] flex items-center justify-center '>
        <div className='bg-[#1a1a1a] w-fit h-fit shadow-3xl p-3 title rounded-xl fixed z-10'>
            <nav>
                <ul className='flex items-center font-bold gap-[3vh] text-md'>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-home ' >Home</li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-About' >Contact</li>
                    <li className='hover:text-white cursor-pointer transition-transform nav-msg bg-[#097969] py-1 px-2 rounded-md' >Login</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar