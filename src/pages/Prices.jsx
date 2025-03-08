import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Price from '../components/Price'
import Products from '../components/Products'
import { PRODUCTS } from '../urls'
import axios from 'axios'

export default function Prices() {
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
    <Price />
    <Footer />
    </>
  )
}
