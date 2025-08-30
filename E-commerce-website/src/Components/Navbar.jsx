import React, { useEffect, useState, useRef } from 'react'
import { LinkedinIcon, Menu, X } from 'lucide-react' // for hamburger icons
import cart_img from '../assets/cart.svg'
import search_icon from '../assets/search.svg'
import { Link } from 'react-router-dom'
import { useCart } from '../Use-context/CartProvider'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const inputRef = useRef(null)
  const {cart} = useCart()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="sticky top-0 mx-auto max-w-full rounded-xl px-6 py-3 flex justify-between items-center 
      bg-white/50 backdrop-blur-md border border-white/20 shadow-xl z-50">

      {/* Logo */}
      <p className="text-2xl sm:text-3xl text-slate-800 font-bold">StreetStyle</p>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex flex-1 justify-center items-center gap-6 mx-8">
        
          <Link to='/' className="relative group cursor-pointer font-semibold text-black">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to='/Collections' className="relative group cursor-pointer font-semibold text-black">
            Collections
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
         
          <Link to='/About' className="relative group cursor-pointer font-semibold text-black">
            About us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to='/Contact' className="relative group cursor-pointer font-semibold text-black">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          

        {/* Example Mega Menu for Shop */}
        <li className="relative group cursor-pointer font-medium text-slate-800">
          Shop
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          
          <div className="absolute top-full left-0 bg-white/80 backdrop-blur-md shadow-lg p-6 rounded-xl hidden group-hover:flex gap-10">
            <div>
              <h4 className="font-bold mb-3">Men</h4>
              <ul className="space-y-2 flex flex-col gap-2">
                <Link to='/Collections?category=T-Shirt' className="hover:text-blue-500">T-Shirts</Link>
                <Link to='/Collections?category=Sneakers' className="hover:text-blue-500">Sneakers</Link>
                <Link to='/Collections?category=Jackets' className="hover:text-blue-500">Jackets</Link>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Women</h4>
              <ul className="space-y-2 flex flex-col gap-2">
                <Link to='/Collections?category=Dresses&gender=Women' className="hover:text-blue-500">Dresses</Link>
                <Link to='/Collections?category=Sneakers&gender=Women' className="hover:text-blue-500">Sneakers</Link>
                
              </ul>
            </div>
          </div>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="hidden sm:flex items-center relative mr-6 border border-gray-500 rounded-2xl px-2 py-1" ref={inputRef}>
        <input
          type="text"
          placeholder="Search"
          className={`transition-all duration-300 ease-in-out px-0 py-1 
                      ${open ? 'w-40 opacity-100 ml-2' : 'w-0 opacity-0 ml-0'} 
                      outline-none`}
        />
        <img
          src={search_icon}
          alt="search"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Desktop Icons */}
      <div className="hidden lg:flex items-center gap-6">
        <Link to="/Cart" >
        <div className='relative h-10 w-14 border border-black rounded-lg flex flex-row gap-0.5 items-center px-2 py-1'>
          
          <img src={cart_img} alt="cart" className="w-6 h-6 cursor-pointer" />
          
          <p className='absolute top-0 right-1 text-black'>({cart.length})</p>
        </div>
        </Link>
        
        <Link to='/Login'><div className='px-4 py-1 border rounded-lg cursor-pointer border-black font-bold text-lg'>Login</div></Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
{mobileOpen && (
  <div className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md flex flex-col items-center gap-6 pt-20 lg:hidden z-40">
    
    {/* Close Button inside overlay */}
    <button 
      onClick={() => setMobileOpen(false)} 
      className="absolute top-5 right-5 text-black"
    >
      <X size={28} />
    </button>

    {['Home','Collections','New Arrivals','Sale','About us','Contact','Shop'].map((item) => (
      <p 
        key={item} 
        className="text-xl font-semibold hover:text-blue-500 cursor-pointer"
        onClick={() => setMobileOpen(false)} // close on click
      >
        {item}
      </p>
    ))}

    <div className="flex items-center gap-6 mt-6">
     <Link to="/Cart" >
        <div className='relative h-6 w-10 '>
          
          <img src={cart_img} alt="cart" className="w-6 h-6 cursor-pointer" />
          
          <p className='absolute top-0 right-0 text-black'>({cart.length})</p>
        </div>
        </Link>
        
        <Link to='/Login'><div className='px-4 py-2 border rounded-4xl cursor-pointer border-black'>Login</div></Link>
    </div>
  </div>
)}

    </div>
  )
}

export default Navbar
