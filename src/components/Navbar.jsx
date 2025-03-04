import React from 'react'
import '../static/style.css'
import { Link } from 'react-router-dom'
import Img from '../assets/e2e3e772-9bcc-11ed-999b-9e4425b8c29a.1200x1000.jpeg'
import Img2 from '../assets/registan-square-samarkand-illuminated-yh97mdj40setk5ig.jpg'
import Img3 from '../assets/shutterstock_1007253181-0-0-0-0-1728474450.jpg'

export default function Navbar() {
    window.addEventListener('scroll', function(){
        var nav = document.querySelector('nav');
        // header.classList.toggle('sticky', window.scrollY > 0);

    })
 
  return (	
   <>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div class="container">
			<Link to={'/'}>
			
			<a class="navbar-brand" href="#">Maktab Travel</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			</Link>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<Link to={'/'}>
					<li class="nav-item">
						<a class="nav-link" href="#">Главная</a>
					</li>
					</Link>
					<Link to={'/about'}>
					<li class="nav-item">
						<a class="nav-link" href="#">О нас</a>
					</li>
					</Link>
					<Link to={'/prices'}>
					
					<li class="nav-item">
						<a class="nav-link" href="#">Цены</a>
					</li>
					</Link>
					<Link to={'/contact'}>
					
					<li class="nav-item">
						<a class="nav-link" href="#">Контакты</a>
					</li>
					</Link>
				</ul>
			</div>
		</div>
	</nav>
	<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
		<div class="carousel-indicators">
			<button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img alt="..." class="d-block w-100" src={Img}/>
				<div class="carousel-caption">
					<h5 class="animated bounceInRight"  style={{fontWeight: '400', color: 'orange'}}>Maktab Travel</h5>
					<p class="animated bounceInLeft d-none d-md-block" style={{fontWeight: '700', }}>Это туристическая компания для учителей и детей</p>
					{/* <p class="animated bounceInRight" >
					<Link to={'/about'}>
						<a href="#">Подробнее</a>
					</Link>
						</p> */}
				</div>
			</div>
			<div class="carousel-item">
				<img alt="..." class="d-block w-100" src={Img3}/>
				<div class="carousel-caption">
					<h5 class="animated bounceInRight"  style={{fontWeight: '400' }}>Maktab Travel</h5>
					<p class="animated bounceInLeft d-none d-md-block"  style={{fontWeight: '700', color: 'orange'}}>Организуем поездки для детей и экскурсии для школ</p>
					{/* <p class="animated bounceInRight" >
					<Link to={'/about'}>
						<a href="#">Подробнее</a>
					</Link>
						</p>				 */}
						</div>
			</div>
			<div class="carousel-item">
				<img alt="..." class="d-block w-100" src={Img2}/>
				<div class="carousel-caption">
					<h5 class="animated bounceInRight"  style={{fontWeight: '400'}}>Maktab Travel</h5>
					<p class="animated bounceInLeft d-none d-md-block" style={{fontWeight: '700', color: 'orange',}} >Здесь вы найдете самый большой выбор самых впечатляющих экскурсий для школьников в зависимости от интересов вашего ребенка и по доступным ценам.</p>
					{/* <p class="animated bounceInRight" > */}
					{/* <Link to={'/about'}>
						<a href="#">Подробнее</a>
					</Link>
						</p>				 */}
						</div>
			</div>
		</div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button>
	</div>

    
   </>
  )
}
