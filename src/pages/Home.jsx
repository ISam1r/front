import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import HomeAbout from '../components/HomeAbout'
import Map from '../components/Map'
import Images from '../components/Images'
import Footer from '../components/Footer'
import { PRODUCTS } from '../urls'
import axios from 'axios'


export default function Home() {
  // const [products, setProducts] = useState([])

  
// useEffect(() => load(), [])

// const load = () => {
//        axios.get(PRODUCTS)
//            .then(res => setProducts(res.data.data))
//            .catch(err => console.log(err))
// }

  return (
    <>
    <Navbar />
    {/* <HomeAbout /> */}
    <Images />
    {/* <Products products={products} /> */}
    <Map />
    <Footer />
    </>
  )
}
  