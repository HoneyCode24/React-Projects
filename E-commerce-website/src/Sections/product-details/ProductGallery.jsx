import React, { useState } from 'react'

const ProductGallery = ({images}) => {
  const [mainImage, setImage] = useState(images[0])
  return (
    <div>
      <img 
        src={mainImage} 
        alt="Product image" 
        className='w-full h-[500px] object-cover rounded-2xl shadow-2xl'/>

      <div className='flex flex-row gap-2 items-center mt-12'>

       {images.map((img,idx)=>(
        <img 
          key={idx} 
          src={img} alt="" 
          className={`w-24 h-24 object-cover cursor-pointer rounded-md border-4 ${mainImage === img? ` border-blue-600` : ` border-gray-600`} `} 
          onClick={()=>setImage(img)}/>
       ))}
      </div>
    </div>
  )
}

export default ProductGallery