import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import HomeAbout from '../components/HomeAbout'
import Map from '../components/Map'
import Images from '../components/Images'
import Footer from '../components/Footer'
import { PRODUCTS } from '../urls'
import axios from 'axios'
import Features from '../components/Features'
import ContactForm from '../components/ContactForm'


export default function Home() {
  const [products, setProducts] = useState([])

  
useEffect(() => load(), [])

const load = () => {
       axios.get(PRODUCTS)
           .then(res => setProducts(res.data.data))
           .catch(err => console.log(err))
}

  return (
    <>
    <Navbar />
    
    <Images />
    < Features />
    <HomeAbout />
    <Products products={products} />
    <ContactForm />
    <Footer />
    </>
  )
}
  