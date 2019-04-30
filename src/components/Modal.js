import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) => {
              const {modalOpen, closeModal} = value;
              const {img, title, price} = value.modalProduct;

              if(!modalOpen){
              return  null; }
              else {
                  return (
               <ModalContainer>
                   <div className="container">
                    <div className="row">
                        <div id="modal" className="col-11 col-sm-8 p-5 rounded mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                            <h5>item added to the cart</h5>
                            <img className="img-fluid my-2" src={img} alt="product" />
                            <h5>{title}</h5>
                            <h5 className="text-muted text-capitalize">price: ${price}</h5>

                            <Link to="/">
                            <button className="backBtn p-2 my-2 mx-2 text-capitalize hvr-grow"
                            onClick={() => {
                                closeModal();
                            }}>continue shopping</button>
                            </Link>

                            <Link to="/cart">
                            <button className="myCart cart-btn p-2 mx-2 text-capitalize hvr-grow"
                            onClick={() => {
                                closeModal();
                            }}>go to cart</button>
                            </Link>
                        </div>
                    </div>
                   </div>
               </ModalContainer>   
                  )}
          }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainWhite);
}
`;
