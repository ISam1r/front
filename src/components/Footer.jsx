import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div class="foo-container">
            <div class="footer-content">
                <h3>Связь с нами</h3>
                <p>Почта:Info@example.com</p>
                <p>Номер:+998652237272</p>
                <p>Адресс: Buxoro shahar I.Mo`minov ko`chasi 2-uy (Buxoro shahar hokimligi binosi 5-qavat) </p>
            </div>
            <div class="footer-content">
                <h3>Переходы</h3>
                 <ul class="list">
                    <Link to={'/'}>
                    <li><a href="">Home</a></li>
                    </Link>
                    <Link to={'/about'}>
                    <li><a href="">About</a></li>
                    </Link>
                    <Link to={'/contact'}>
                    <li><a href="">Contact</a></li>
                    </Link>                    
                 </ul>
            </div>
            <div class="footer-content">
                <h3>Следите за нами</h3>
                <ul class="social-icons">
                 <li><a href="https://www.youtube.com/@maktab_travel_official"><i class="fa-brands fa-youtube"></i></a></li>
                 <li><a href="https://t.me/travelmaktab?fbclid=PAZXh0bgNhZW0CMTEAAaaOeOASyf2oyGQ-31vgSAsJnZSnf36QCVSPGgXL48Sf1TE14fOCBAJFn0w_aem_Z5EU3qfJ295kmP9312XIhA"><i class="fa-brands fa-telegram"></i></a></li>
                 <li><a href="https://www.instagram.com/maktab_travel_official/"><i class="fab fa-instagram"></i></a></li>
               
                </ul>
                </div>
        </div>
        <div class="bottom-bar">
            <p>&copy; 2023 your company . All rights reserved</p>
        </div>
    </footer>
  )
}
