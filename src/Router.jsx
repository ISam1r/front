import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Prices from './pages/Prices'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'


export default function Router() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/prices' element={<Prices />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path="/product/:id" element={<ProductDetail/>}  />
  </Routes>
  </BrowserRouter>
  )
}