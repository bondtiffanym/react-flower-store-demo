import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../favicon.ico';

export class Navbar extends Component {
  render() {
    return (
    
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        
        {/*Icon Attribution https://stockio.com/
        https://www.stockio.com/free-icon/gabriel-sunflower */}

        <Link to="/">
         <img src={logo} alt="Product List"  className="navbar-brand mr-auto" />
        </Link>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
        <Link to="/" className="nav-link hvr-grow">
        Products
        </Link>
        </li>
        </ul>
        <Link to="/cart" className="ml-auto">
        <button className="myCart hvr-grow ml-2">
            <i className="fas fa-cart-plus"></i><span className="d-none d-sm-inline-block ml-1"> My Cart</span>
        </button>
        </Link>
      </nav>
      
    );
  }
}


export default Navbar
