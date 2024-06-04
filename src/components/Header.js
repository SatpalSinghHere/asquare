import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='grid grid-flow-col px-2 shadow-lg fixed bg-black w-full h-14 z-20 items-center'>
            <div className='flex col-span-1'>
                <img className='w-20' src={logo} alt="logo" />
            </div>
            <div>
                <div className='flex justify-between px-5 border-white rounded-full border-2 text-white list-none w-full'>
                    <Link to="/"><li className='hover:drop-shadow-text cursor-pointer'>HOME</li></Link>
                    <Link to="/about"><li className='hover:drop-shadow-text cursor-pointer'>ABOUT US</li></Link>
                    <Link to="/blog"><li className='hover:drop-shadow-text cursor-pointer'>BLOG</li></Link>
                    <Link to="/contact"><li className='hover:drop-shadow-text cursor-pointer'>CONTACT</li></Link>
                    
                </div>
            </div>

            <div className='col-span-1'>

            </div>

        </div>
    )
}

export default Header
