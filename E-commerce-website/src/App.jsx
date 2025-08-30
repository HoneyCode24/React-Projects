import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import ContextProvider from './Use-context/ContextProvider'
import ProductDetails from './Pages/ProductDetails'
import CartProvider from './Use-context/CartProvider'
import Cart from './Pages/Cart'
import AuthForm from './Pages/AuthForm'
import Contact from './Pages/Contact'
import About from './Pages/About'
const App = () => {
  return (
    <div>
      <CartProvider>
      <ContextProvider>
        <Routes>
        <Route path='/Login' element={<AuthForm/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/Collections' element={<Collections/>}/>
        <Route path='/Product/:id' element={<ProductDetails/>}/>
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>} />
      </Routes>
      </ContextProvider>
      </CartProvider>
    </div>
  )
}

export default App