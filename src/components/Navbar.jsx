import React from 'react'
import '../static/style.css'
import { Link } from 'react-router-dom'
import Img from '../assets/e2e3e772-9bcc-11ed-999b-9e4425b8c29a.1200x1000.jpeg'
import Img2 from '../assets/registan-square-samarkand-illuminated-yh97mdj40setk5ig.jpg'
import Img3 from '../assets/fc40d46a-11b9-11ee-8632-1afb68c200e7.1600x900.jpeg'

export default function Navbar() {
  function toggleMenu() {
    const links = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const items = document.querySelectorAll('.nav-links li');
    
    links.classList.toggle('active');
    burger.classList.toggle('active');
    
    if (links.classList.contains('active')) {
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    } else {
        items.forEach((item) => {
            item.style.transitionDelay = '0s';
        });

}
  }
  return (	
   <>
   <header>
        <nav className="navbar">
            <div className="logo">MAKTAB TRAVEL</div>
            <ul className="nav-links">
                <li><a href="#">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#tours">Туры</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
            <div className="burger" onClick={toggleMenu}>☰</div>
        </nav>
    </header>
   </>
  )
}
