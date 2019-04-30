import React from 'react'

export default function CartItem({item, value}) {
    const {id, title, price, img, total, count} = item;
    const {increment, decrement, removeItem} = value;
  return (
    <div className="row my-2 text-capitalize text-center">

      <div className="col-10 mx-auto col-lg-2">
      <img src={img} style={{width: '5rem', height: '5rem'}} alt="product" className="img-fluid"/>
      </div>

      <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none">Product: </span>{title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none">Price: </span>{price}
      </div>

      <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
        <div className="d-flex justify-content-center">
        <div>
            <span className="btn btn-black hvr-grow mx-1" onClick={() => decrement(id)}><i className="fas fa-minus" /></span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black hvr-grow mx-1" onClick={() => increment(id)}><i className="fas fa-plus" /></span>
        </div>
        </div>
      </div>

      <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
      <div className="cart-icon" 
      onClick={() => removeItem(id)}>
      <i className="fas fa-trash" />
      </div>
      </div>

      <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
      <strong>Total: ${Math.round(total * 100) / 100}</strong>
      </div>

    </div>
  )
}
