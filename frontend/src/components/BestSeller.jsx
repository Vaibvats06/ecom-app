import React,{ useContext,useEffect,useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {
    
    const {products}=useContext(ShopContext)
    const [bestSeller,setBestSeller]=useState([])
    useEffect(()=>{
        const bestProducts=products.filter((item)=>(item.bestseller))
        setBestSeller(bestProducts.slice(0,5))
       
    },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BESTSELLER'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 text-xs sm:text-sm md:text-base text-gray-600 m-auto my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat repellat harum maiores.</p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">{bestSeller.map((item, index) => (
      <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price} />))} 
       </div>

    </div>
  )
}

export default BestSeller