import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contanct from './pages/Contanct'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contanct/>}/>
        <Route path='/product:productId' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App