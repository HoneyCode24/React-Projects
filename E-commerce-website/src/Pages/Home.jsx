import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Sections/Hero'
import FeaturedCollections from '../Sections/FeaturedCollections'
import TrendingProducts from '../Sections/TrendingProducts'
import NewArrivals from '../Sections/NewArrivals'
import Categories from '../Sections/Categories'
import Discount from '../Sections/Discount'
import Testimonials from '../Sections/Testimonials'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <FeaturedCollections/>
        <TrendingProducts/>
        <NewArrivals/>
        <Categories/>
        <Discount/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
export default Home