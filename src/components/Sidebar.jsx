import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri'
import {IoIosArrowForward} from 'react-icons/io'

import logo from '../assets/logo.png'

function Sidebar({user, closeToggle}) {

  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitilaze'
  const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2-black transition-all duration-200 ease-in-out capitilaze'

  const handleCloseSidebar = () => {
    if(closeToggle) {
      closeToggle(false)
    }
  }

  const categories = [
    {name:'Animals'},
    {name:'Wallpapers'},
    {name:'Photography'},
    {name:'Gaming'},
    {name:'Coding'},
    {name:'Other'},
  ]

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link
        to="/"
        className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
        onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo"/>
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
          to="/"
          className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
          onClick={handleCloseSidebar}
          >
            <RiHomeFill/>
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2x1:text-x1'>Discover Categories</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink 
            to={`/category/${category.name}`}
            className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
            onClick={handleCloseSidebar}
            key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
