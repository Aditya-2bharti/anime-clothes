import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs' ;
import { MdAccountCircle } from 'react-icons/md' ;
 
 

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
    const toggleCart = () =>{
        if(refs.current.classList.contains('translate-x-full')){
            refs.current.classList.remove('translate-x-full')
            refs.current.classList.add('translate-x-0')
        }
        else if(!refs.current.classList.contains('translate-x-full')){
            refs.current.classList.remove('translate-x-0')
            refs.current.classList.add('translate-x-full')
        }
    }
    const refs = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0    bg-white z-10'> 
        <div className='logo mx-5 pt-1'>
            <Link href={"/"}><a><Image src='/logo.png' alt='' height={"40"} width = {"200"} /></a></Link>
        </div>
            <div className='nav '>
                <ul className='flex space-x-4 font-bold md:text-md'>
                    <Link href={'/tshirts'}><a><li className=' hover:text-red-500' >Tshirts</li></a></Link>
                    <Link href={'/hoodies'}><a><li className=' hover:text-green-500'>Hoodies</li></a></Link>
                    <Link href={'/stickers'}><a><li className=' hover:text-yellow-500'>Stickers</li></a></Link>
                    <Link href={'/mugs'}><a><li className=' hover:text-blue-500'>Mugs</li></a></Link>
                </ul>
            </div>
            <div className=' cursor-pointer cart absolute right-0 top-4 mx-5 flex '>
           <Link href={'/login'}><a><MdAccountCircle className='text-2xl md:text-3xl mx-2  hover:text-orange-500'/></a></Link>
                <AiOutlineShoppingCart onClick={toggleCart}  className='text-2xl md:text-3xl  hover:text-pink-500' />
            </div>    

            

          <div ref={refs} className={` w-72 h-[100vh]  sideCart overflow-y-scroll absolute top-0 right-0 bg-pink-100 px-10  py-10 transform transition-transform  ${Object.keys(cart).length !== 0 ?'translate-x-0':'translate-x-full'}`}>
               <h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
               <span onClick={toggleCart} className=' cursor-pointer absolute top-5  right-2 text-2xl text-pink-500'><AiOutlineCloseCircle/></span>
               <ol className='font-semibold list-decimal'>
                    {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty!</div>}
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                       <div className='item flex my-3'>
                            <div className='w-2/3 font-semibold'> {cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
                            <div className='w-1/3 flex items-center justify-center  font-semibold text-lg  '> <AiOutlineMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-pink-500 cursor-pointer'/><span className='mx-2 text-sm'>{cart[k].qty}</span><AiOutlinePlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-pink-500 cursor-pointer'/></div>
                       </div>
                   </li> })}
                   
                </ol>
                <div className='font-bold my-2'>Subtotal:  {subTotal}</div>  
               <div className='flex'>
                   <Link href={'/checkout'}><button className="flex mr-2 text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Checkout</button></Link> 
                    <button onClick={clearCart} className="flex mr-2  text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm  "> Clear Cart</button>
               </div>
            </div>  
    </div>
  )
}

export default Navbar