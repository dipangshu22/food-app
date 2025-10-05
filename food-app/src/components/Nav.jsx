import React from 'react'
import { MdOutlineNoFood } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

export default function Nav() {
  return (
   
    <div className='w-full h-[100px] flex justify-between items-center px-10 '>
    <div className='w-[40px] h-[40px] bg-amber-50 flex justify-center items-center rounded-md shadow-xl' ><MdOutlineNoFood  className='w-[30px] h-[30px] hover:bg-amber-100 text-emerald-400 '/></div>
    <form action="" className='rounded-md shadow-xl w-[600px] h-[40px] flex items-center px-4 gap-3 bg-amber-50'>
    <AiOutlineSearch />
    <input type="text"  className='w-full outline-0'  placeholder='search your food' />


    </form>
     <div className='w-[40px] h-[40px] bg-amber-50 flex justify-center items-center rounded-md shadow-xl'><PiShoppingCartSimpleDuotone className='w-[30px] h-[30px] hover:bg-amber-100  text-emerald-500' /></div>
      
    </div>
  
  )
}
