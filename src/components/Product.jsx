import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({name, description, category, thumb, price, id, product, documentId}) {
  console.log(thumb)
  return (
    <>
    <section className='pr-section'>
        
    <div className="card" style={{ maxWidth: '270px' }}>
      <div className="card-image">
        <Link to={`/product/${documentId}`}>
          <figure className="image">
            <img
              src={`https://strapi-gt2u.onrender.com${thumb}`}
              alt="Placeholder image"
              style={{ height: '300px' }}
            />
          </figure>
        </Link>
      </div>
      <div className="card-content ">
        <div className="media">
          <div className="media-content">
            <p className="title is-5"> {name}</p>
            <div className="columns is-centered mt-3">
              <div className="column is-10">
                <div className="title is-6">{price} sum</div>
              </div>
              <div className="column">
                {/* <span className="tag is-info is-right">{brand}</span> */}
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
        </section>
    </>
  )
}
