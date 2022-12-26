import React from 'react'
import Link from 'next/link'
import Product  from '../models/Product';
import mongoose from "mongoose";

const Hoodies = ({products}) => {
   
  return (
    <div> 
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
{Object.keys(products).length === 0 && <p>Sorry all the Hoodies are currently out of stock. New stock coming soon.</p>}
    {Object.keys(products).map((item)=>{return <Link passHref={true} key={item._id} href={`/product/${products[item].slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:m-0   block " src={products[item].img}/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
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
 
  let products = await Product.find({category: 'hoodies'})
  let hoods =  {}
  for(let item of products){
    if(item.title in hoods){
       if(!hoods[item.title].color.includes(item.color) && item.availableQty > 0){
        hoods[item.title].color.push(item.color)
       }
       if(!hoods[item.title].size.includes(item.size) && item.availableQty > 0){
        hoods[item.title].size.push(item.size)
       }
    }
    else{
      hoods[item.title] = JSON.parse(JSON.stringify(item))
      if(item.availableQty > 0){
        hoods[item.title].color = [item.color]
        hoods[item.title].size = [item.size]
      }
    }
  }
 
  return {
    props: {products: JSON.parse(JSON.stringify(hoods))}, // will be passed to the page component as props
  }
}

export default Hoodies












      {/* <Link href={'/product/Anime-hood1'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh]  block" src="https://m.media-amazon.com/images/I/51A+FNAod3L._UX679_.jpg"/>
        </a>
        https://m.media-amazon.com/images/I/71NzO1Cp2IL._UX679_.jpg
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">FASHION AND YOUTH Men's Cotton Hooded Sweahood</h2>
          <p className="mt-1">₹999.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-hood2'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh]  block" src="https://m.media-amazon.com/images/I/515qFz-uDdL._UX679_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">gojo satoru Jujutsu kaisenn Anime Unisex Hoodies Sweahood</h2>
          <p className="mt-1">₹1599.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-hood3'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh]  block" src="https://m.media-amazon.com/images/I/61XpdcTcvFL._UY741_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">TEECREEP Pain Anime Hoodie</h2>
          <p className="mt-1">₹750.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-hood4'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61FFKEgAD6L._UX679_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">VnM Men's & Women's Goku Fighing Stylish Printed Cotton Hooded Hoodies</h2>
          <p className="mt-1">₹999.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-hood5'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/51p44Nue-ZL._UX679_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">FASHION AND YOUTH Death Note Logo Black Anime Hoodie | Light Yagami Hoodie Jacket | Anime Jacket Sweahood | Mens Hoodies Hoodies for Mens Sweahood Black Color</h2>
          <p className="mt-1">₹799.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-hood6'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/51c3sqhPkhL._UY741_.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">ComicSense.xyz Jujutsu Kaisen Anime Hollow Purple Hoodie</h2>
          <p className="mt-1">₹2199.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/Anime-hood7'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh]  block" src="https://m.media-amazon.com/images/I/41ca7FyYMUL.jpg"/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Teewink Latest Unisex Goku Legacy Tricolor Anime Design Printed Hooded Hoodies | Pullover Sweahoods for Men & Women</h2>
          <p className="mt-1">₹799.00</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div>
      </div>
      </Link> */}
   