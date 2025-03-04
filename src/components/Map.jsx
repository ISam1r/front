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

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2168.56476936176!2d64.42130327999713!3d39.766290903018486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1741103519710!5m2!1sru!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
          </div>
    </section>
    </>
  )
}
