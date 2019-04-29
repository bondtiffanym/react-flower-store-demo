import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import 'hover.css';

function App() {
  return (
   <React.Fragment>
     <Navbar />

     <Switch>
       <Route exact path="/" component={ProductList} />
       <Route path="/details" component={Details} />
       <Route path="/cart" component={Cart} />
       <Route component={Default} />
     </Switch>
     <Modal />
     
   </React.Fragment>
  );
}

export default App;
