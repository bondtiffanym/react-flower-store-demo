import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {title, img, price, id, info, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
            {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-purple my-5">
                <h1 className="text-title">{title}</h1>
                 </div>
              </div>
              {/* end title */}

              {/* product info */}
              <div className="row">
              {/* product image */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>{title}</h2>
                <h4 className="text-purple">
                  <strong>Price: <span>$</span>{price}</strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                Description: </p>
                <p className="text-muted lead">{info}</p>
                

                {/* Buttons */}
                <Link to="/">
                <button className="backBtn mt-2 mr-3 p-2 text-capitalize hvr-grow">back to product</button>
                </Link>

                <button className="myCart cart-btn mt-2 p-2 text-capitalize hvr-grow"
                disabled={inCart ? true: false} onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}>
                {inCart ? 'In Cart' : 'Add To Cart'}</button>
              </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
