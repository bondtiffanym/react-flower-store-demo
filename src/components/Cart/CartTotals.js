import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart, history} = value; 
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                        Clear Cart</button>
                    </Link>
                    <h5>
                        <span>
                        Subtotal: </span>
                        <strong>${cartSubTotal.toFixed(2)}</strong>
                    </h5>
                    <h5>
                        <span>
                        Tax: </span>
                        <strong>${cartTax.toFixed(2)}</strong>
                    </h5>
                    <h5>
                        <span>
                        Total: </span>
                        <strong>${cartTotal.toFixed(2)}</strong>
                    </h5>
                    <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
