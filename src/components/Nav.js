import React from 'react'
import {FaFacebookF}from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaPinterestP} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>

     <div className='flex justify-between items-center mt-4'>
        <div className='flex ml-12 items-center '>
            <h1 className='text-2xl font-bold'>FastShop</h1>
            <nav >
                <ul className='flex items-center justify-center ml-20  '>
                    <li className='ml-4 text-gray-400 font-bold'>Home</li>
                    <li className='ml-4 text-gray-400 font-bold'><Link to='/cart'>Cart</Link></li>
                    <li className='ml-4 text-gray-400 font-bold'>About</li>
                   
                    
                </ul>
            </nav>
        </div>
        <div className='flex mr-20 items-center'>
        <div className='ml-4
         bg-slate-300 
         rounded-full
          w-6 flex justify-center 
          items-center h-6 border
           cursor-pointer
            text-white' >
            <FaFacebookF/>
            </div>
        <div className='
        ml-4 bg-slate-300
         rounded-full w-6 flex 
         justify-center items-center
          h-6 border cursor-pointer
           text-white
           '
             ><BsTwitter/>
             </div>
             
        <div className='
        ml-4 bg-slate-300
         rounded-full w-6 flex justify-center
          items-center h-6 border 
          cursor-pointer
           text-white
           
           
          ' ><FaPinterestP/></div>
        <div className='ml-6 bg-gradient-to-tr
         from-purple-400
          to-pink-500 flex
           items-center 
           justify-center
            w-9 rounded
             text-white
             '>3</div>

        </div>
    </div>     
    </div>
  )
}

export default Nav
