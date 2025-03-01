import React from 'react'
import Img from '../assets/his.jpg'

export default function Map() {
  return (
    <>
    <section className='map-section' style={{marginTop: '30px'}}>
        <div className="ha-container">
          <div className="columns">
            <div className="ha-content" style={{color: 'white', fontSize:'35px'}}>

            <p>Так вот наш адресс:</p>
            <p>Buxoro shahar I.Mo`minov ko`chasi 2-uy (Buxoro shahar hokimligi binosi 5-qavat)</p>
            </div>
            <div className="ha-img">

            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3066.824518596799!2d64.43450637544943!3d39.76604819498593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KPQu9C40YbQsCDQmNCx0YDQvtGF0LjQvCDQnNGD0LzQuNC90L7QsiAyINC00L7QvA!5e0!3m2!1sru!2s!4v1740324968987!5m2!1sru!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
          </div>
    </section>
    </>
  )
}
