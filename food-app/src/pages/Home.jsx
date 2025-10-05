import React from 'react'
import Nav from '../components/Nav'
import Category from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-amber-100'>
    
    <Nav></Nav>
    <Category></Category>
    <div className='w-full flex flex-wrap gap-3 p-3 justify-center items-center'>{food_items.map((items)=>{
      return <Card name={items.food_name} food_type={items.food_type} food_image={items.food_image} food_price={items.price} ></Card>

    })}</div>
    
    </div>
    
        
    
  )
}
