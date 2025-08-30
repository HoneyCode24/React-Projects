import React, { useState } from 'react'

const ProductInfo = ({product, addToCart}) => {

  const [value, setValue] = useState(1)

  return (
    <div className='flex flex-col gap-8'>
      <h1 className='font-extrabold text-4xl'>{product.name}</h1>
      <p className='font-semibold text-xl text-blue-600 '>₹{product.price}</p>
      <div>
        <p className='font-semibold mb-4 text-lg'>Select size</p>
      
        <div className='flex flex-row gap-6 items-center'>
          {['S','M','L','XL'].map((item,idx) =>(
          <p 
          key={idx} 
          className='cursor-pointer p-4 rounded-lg border border-black hover:border-blue-600'>{item}</p>
          ))}
        </div>
      </div>

      <div className='flex flex-row gap-6 items-center'>
        <p className='font-semibold text-lg'>Quantity:</p>
        <div className='flex flex-row gap-6 border items-center border-black rounded-xl px-4 py-2'>
          <p className='cursor-pointer text-2xl' onClick={()=>setValue(value-1)}>-</p>
          <p className=' text-xl'>{value}</p>
          <p className='cursor-pointer text-2xl' onClick={()=>setValue(value+1)}>+</p>
        </div>
      </div>

      <div className='flex flex-row items-center gap-6'>
        <button 
        className='rounded-xl px-6 py-4 text-lg bg-blue-600 text-white cursor-pointer'
        onClick={()=>addToCart(product)}
        >Add to cart</button>
        <button className='rounded-xl px-6 py-4 text-lg border border-black bg-white text-black cursor-pointer'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductInfo