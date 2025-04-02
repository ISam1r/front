import React from 'react'
import '../static/style.css'
import { Link } from 'react-router-dom'
import Img from '../assets/e2e3e772-9bcc-11ed-999b-9e4425b8c29a.1200x1000.jpeg'
import Img2 from '../assets/registan-square-samarkand-illuminated-yh97mdj40setk5ig.jpg'
import Img3 from '../assets/fc40d46a-11b9-11ee-8632-1afb68c200e7.1600x900.jpeg'

export default function Navbar() {
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
  return (	
   <>
   <header>
        <nav class="navbar">
            <div class="logo">MAKTAB TRAVEL</div>
            <ul class="nav-links">
                <li><a href="#">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#tours">Туры</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
            <div class="burger" onClick={toggleMenu}>☰</div>
        </nav>
    </header>
   </>
  )
}
