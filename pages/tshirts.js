import React from 'react'
import Link from 'next/link'
import Product  from '../models/Product';
import mongoose from "mongoose";

const Tshirts = ({products}) => {
   
  return (
    <div> 
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-2 justify-center">
    {Object.keys(products).map((item)=>{return <Link passHref={true} key={item._id} href={`/product/${products[item].slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block relative  " src={products[item].img}/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1">₹{products[item].price}</p>
          <div className="mt-1">
           {products[item].size.includes('S') && <span className='border border-gray-300 mx-1 px-1'>S</span>   }
           {products[item].size.includes('M') && <span className='border border-gray-300 mx-1 px-1'>M</span>  }
           {products[item].size.includes('L') && <span className='border border-gray-300 mx-1 px-1'>L</span>  }
           {products[item].size.includes('XL') && <span className='border border-gray-300 mx-1 px-1'>XL</span>   }
           {products[item].size.includes('XXL') && <span className='border border-gray-300 mx-1 px-1'>XXL</span>   }
          </div>
          <div className="mt-1">
          {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
            
          </div>
        </div>
      </div> 
        </Link>})}
      {/* <Link href={'/product/Anime-Tshirt1'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block" src="https://m.media-amazon.com/images/I/611RIXBGREL._UY741_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Darkbuck® Anime T Shirt for Men and Women Regular Naruto Uzumai Shippuden Tshirts Unisex Pure Cotton Casual Wear Round Neck T-Shirt</h2>
          <p className="mt-1">₹499.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-Tshirt2'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block" src="https://m.media-amazon.com/images/I/61lNB43sAnL._UY741_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">FADDY NATIVE Naruto Anime Don’t be Afraid of Death T Shirt</h2>
          <p className="mt-1">₹499.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-Tshirt3'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block" src="https://m.media-amazon.com/images/I/51FAIDowtEL._UY741_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Squareknot Best Anime Printed Half Sleeve Round Neck Regular Fit Men's T-Shirt for Casual Wear in White Color | Any Time Wear Anime Tshirts at</h2>
          <p className="mt-1">₹599.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-Tshirt4'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block" src="https://m.media-amazon.com/images/I/51iD4kiMQWL._UY679_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">FADDY NATIVE Naruto Anime Printed Half Sleeve Round Neck T Shirt</h2>
          <p className="mt-1">₹499.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-Tshirt5'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block" src="https://m.media-amazon.com/images/I/61v8ZI9dyAL._UY741_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">ComicSense.xyz Attack on Titan Anime Levi Me Alone T Shirt</h2>
          <p className="mt-1">₹499.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-Tshirt6'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block" src="https://m.media-amazon.com/images/I/61+h7Xyqo6L._UX679_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">SL sirLOBO ONE Piece (Luffy) Men & Women Anime Printed 100% Cotton Regular Fit Black Anime T-Shirt (QT)</h2>
          <p className="mt-1">₹499.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-Tshirt7'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[46vh] block" src="https://m.media-amazon.com/images/I/51kl6LeSlnL._UY741_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">INDISSH Unisex Collarless Regular Fit Pure Cotton Round Neck Jujutsu (JJU2) Anime Graphic Printed T-Shirt| Regular & Casual Wear Half-Sleeves Tshirts| Pack of 1 Tshirt|</h2>
          <p className="mt-1">₹599.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link> */}
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
     
  }
 
  let products = await Product.find({category: 'tshirt'})
  let tshirts =  {}
  for(let item of products){
    if(item.title in tshirts){
       if(!tshirts[item.title].color.includes(item.color) && item.availableQty > 0){
        tshirts[item.title].color.push(item.color)
       }
       if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0){
        tshirts[item.title].size.push(item.size)
       }
    }
    else{
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if(item.availableQty > 0){
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }
    }
  }
 
  return {
    props: {products: JSON.parse(JSON.stringify(tshirts))}, // will be passed to the page component as props
  }
}

export default Tshirts