import React from 'react'
import Img1 from '../assets/photo_2022-12-17_12-43-18.jpg'
import Img2 from '../assets/photo_2025-02-05_12-23-46.jpg'
import Img3 from '../assets/photo_2025-02-05_13-00-36.jpg'
import Img4 from '../assets/photo_2025-02-05_13-00-37.jpg'

export default function Images() {
  return (
    <>
        <section className='img-section'>
            <div className='img-container'>
            <div className="columns is-multiline is-centered" style={{display: 'flex', flexWrap: 'wrap', gap: '0', paddingTop: '50px'}}>
                    <img src={Img1} alt="" />
                </div>
                <div className="columns is-multiline is-centered" style={{display: 'flex', flexWrap: 'wrap', gap: '0' }}>
                    <img src={Img2} alt="" />
                </div>
                <div className="columns is-multiline is-centered" style={{display: 'flex', flexWrap: 'wrap', gap: '0' }}>
                    <img src={Img3} alt="" />
                </div>
                <div className="columns is-multiline is-centered" style={{display: 'flex', flexWrap: 'wrap', gap: '0' }}>
                    <img src={Img4} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}
