import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import {PRODUCT} from "../urls";

export default function ProductDetail() {
    const [product, setProduct] = useState()
    const params = useParams()
    useEffect(() => {
        axios
          .get(PRODUCT.replace('id', params.id))
          .then((res) => setProduct(res.data.data))
          .catch((err) => console.error(err))
      }, [])

const image = product ? product.image.url : ''
const description = product ? product.description : ''
const name = product ? product.name : ''
const price = product ? product.price : ''
  return (
    <div className="section">
    <div className="container">
        <div className="title is-ancestor">
            <div className="title is-vertical">
                {product && (
                    <div className="title">
                        <div className="title is-parent is-vertical">
                            <article className="tile is-child notification has-text-centered">
                                <img
                                    src={`http://localhost:1337${image}`}
                                    alt="404 not found"/>
                            </article>
                        </div>
                        <div className="title is-parent">
                            <article className="title is-child notification">
                                <div className="title is-4">{name}</div>
                                <div className="subtitle has-text-grey is-spaced">{description}</div>
                                <div className="title is-4 has-text-success">{price} sum</div>
                                <div className="content">
                                 <Link to={'/contact'}>
                                    <button className="button mr-3 is-primary">Buy</button>
                                 </Link>
                                  
                                    <form className="form">
                                      
                                        <Link to='/' style={{textDecoration: 'none'}}>
                                            <button className='button is-danger      my-2'>
                                                Back to main
                                            </button>
                                        </Link>
                                    </form>
                                </div>
                            </article>
                        </div>
                    </div>
                )}
             
            </div>
        </div>
    </div>
</div>

  )
}
