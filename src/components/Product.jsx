import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
 
    return (
      <div className="product flex-wrap">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small><b>$</b></small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p><i className="fa-solid fa-star " style={{color:'darkorange'}}></i></p>
              ))}
          </div>
        </div>
  
        <img src={image} alt="" />
  
        <button className='btn btn-warning m-3'>Add to Basket</button>
      </div>
    );
  }
  

export default Product