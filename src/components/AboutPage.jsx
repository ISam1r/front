import React from 'react'
import Img from '../assets/photo_2022-12-17_12-00-44.jpg'



export default function AboutPage() {
  return (
    <>
     <section className='ha-section'>
                <div className="ha-container">
                    <div className="columns">
                        <div className="ha-img">
                            <img src={Img} alt=""  className='ha-img' style={{marginRight: '25px'}}/>
                        </div>
                        <div className="ha-content " style={{marginLeft: '25px'}}>
                            <h1 style={{fontSize: '30px', color: 'black', fontWeight: '500'}}>О нас</h1>
                            <p style={{fontSize: '15px', color: 'black', fontWeight: '700'}}> Экскурсии для школьников, каждая поездка имеет свой смысл. Некоторые экскурсии рассчитаны на общее развитие школьников, помогают углубленно изучить определенную тему, а другие доставят приятное времяпрепровождение и приятные ощущения</p>
                            <p style={{fontSize: '15px', color: 'black', fontWeight: '700'}}>Некоторые экскурсии рассчитаны на общее развитие школьников, помогают углубленно изучить определенную тему, а другие доставят приятное времяпрепровождение и приятные ощущения.</p>
                            <p style={{fontSize: '15px', color: 'black', fontWeight: '700'}}>Основная задача нашей компании – организация незабываемых экскурсий для школьников.</p>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem harum hic ducimus veniam molestias sunt recusandae sequi et aspernatur. Temporibus modi animi dolores natus voluptates laborum porro quidem perspiciatis perferendis numquam ea officiis assumenda id, esse possimus! Quae temporibus culpa voluptate iusto soluta a harum ea nam animi nulla.</p> */}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <p style={{fontSize: '25px', color: 'black', fontWeight: '700', alignItems: 'center', textAlign: 'center'}}>Преимущества сотрудничества с «Мир Школьных Экскурсий» Наша компания уже давно занимается организацией интересных и увлекательных познавательных экскурсий для детей. Здесь вы найдете самый большой выбор самых впечатляющих экскурсий для школьников в зависимости от интересов вашего ребенка и по доступным ценам. Организуем поездки для детей и экскурсии для школ.</p>
            </section>
    </>
  )
}
