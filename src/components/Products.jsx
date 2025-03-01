import React, {useState} from 'react';
import Product from "./Product";

export default function Products({products}) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [count] = useState(1)
   return (
    <section className='prs-section'>

       <div className="columns is-multiline is-centered" style={{display: 'flex', flexWrap: 'wrap', gap: '0', marginTop: '15px'}}>
           {products && products.map(product => (
               <div className="column is-3" key={product.id} >
                   <Product 
                       id={product.id}
                        //   brand={product.attributes.brand.data.attributes.title}
                       name={product.name}
                       price={product.price}
                       thumb={product.image.url}
                       documentId={product.documentId}
                       />
               </div>
           ))}
       </div>
           </section>
   );
}
