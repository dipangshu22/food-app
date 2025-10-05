import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";

export default function Card(props) {
  return (
    <div className='w-[280px] h-[360px] bg-amber-50 p-3 rounded-b-lg flex flex-col gap-4 hover:shadow-2xl '>
        <div ><img src={props.food_image} alt=""  className='h-[180px] w-full rounded-2xl'/></div>
        <div className='text-2xl font-semibold'>{props.name}</div>
        <div  className='w-full flex justify-between items-center'> <div className='text-lg text-emerald-800 font-medium'>Rs {props.food_price}/.</div>
        <div className='flex justify-center items-center gap-3'><LuLeafyGreen  className='text-green-500'/>
        <span>{props.food_type}</span></div></div>
        <button className='w-full p-2 bg-green-200 rounded-2xl hover:bg-green-300 cursor-pointer transition-all duration-200'>Add to Dish</button>
       
        
    </div>
  )
}
