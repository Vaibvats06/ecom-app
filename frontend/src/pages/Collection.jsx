import React,{useContext} from 'react'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const {products} =useContext(ShopContext)
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map((item,index)=>{<ProductItem key={index} image={item.image} name={item.name} price={item.price} />})}
    </div>
    
  )
}

export default Collection