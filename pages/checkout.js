import React from 'react'
import {   AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs' ;
import Link from 'next/link'

const Checkout = ({cart,subTotal,addToCart,removeFromCart}) => {
 
  return (
    <div className='container px-2 sm:m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className='mx-auto flex my-1'>
        <div className='px-2 w-1/2'>
          <div className=" placeholder: mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
         <div className='px-2 w-1/2'>
          <div className="  mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>  
      <div className='px-2 w-full'>
          <div className="  mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea cols='30' rows='2' id="address" name="address "  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
          </div>
      </div>
      <div className='mx-auto flex my-1'>
        <div className='px-2 w-1/2'>
          <div className=" placeholder: mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone No.</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
         <div className='px-2 w-1/2'>
          <div className="  mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>  
      <div className='mx-auto flex my-1'>
        <div className='px-2 w-1/2'>
          <div className=" placeholder: mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
         <div className='px-2 w-1/2'>
          <div className="  mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>  
      <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
      

      <div   className='   sideCart  bg-pink-100 p-6  m-2  '>
                
               
               <ol className='font-semibold list-decimal'>
                    {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty!</div>}
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                       <div className='item flex my-3'>
                            <div className='  font-semibold'> {cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
                            <div className='w-1/3 flex items-center justify-center  font-semibold text-lg  '> <AiOutlineMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-pink-500 cursor-pointer'/><span className='mx-2 text-sm'>{cart[k].qty}</span><AiOutlinePlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-pink-500 cursor-pointer'/></div>
                       </div>
                   </li> })}
                </ol>
                   <span className='font-bold'>Subtotal:  {subTotal}</span>   
            </div>  
            <div className='mx-4'>
            <Link href={'/checkout'}><button className="flex mr-2 text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Pay ₹{subTotal}</button></Link> 

            </div>
    </div>
  )
}

export default Checkout