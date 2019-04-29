import React, { Component } from 'react';
import {storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();


class ProductProvider extends Component {
  //method "setProducts" purpose is to grab and copy the values nested inside the product data objects in Data.js. When "add to cart" value is changed with setState(), the value inside those objects is changed. The values inside data objects should never permanantly be changed, so the values have to be copied and the copies changed, rather than the source values -- remember for later 
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };

    //runs function below when component is mounted
    componentDidMount(){
      this.setProducts();
    }

    //function copies product object values into a variable, then loops through each key value in the object and stores them into an array, then returns the state value as that array in this.setState() 
    setProducts = () => {
      let tempProducts = [];
      storeProducts.forEach(item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts,singleItem];

      })
      this.setState(() => {
        return {products:tempProducts}
      })
    }

    getItem = (id) => {
      const product = this.state.products.find(item => item.id === id);
      return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return {detailProduct:product}
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
          return {products:tempProducts, cart:[...this.state.cart, product] };
        }, () => {this.addTotals();
        }
        );
    }
    
    openModal = id => {
      const product = this.getItem(id);
      this.setState(() => {
        return {modalProduct: product, modalOpen:true}
      })
    };
    closeModal = () => {
      this.setState(() => {
        return {modalOpen: false}
      })
    };


    

    decrement = (id) => {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];

      product.count = product.count - 1;
      if(product.count === 0) {
        this.removeItem(id);
      } else {
        product.total = product.count * product.price;
        this.setState(() => {
          return {cart:[...tempCart]}
        }, () => {
          this.addTotals();
        }
        );
      }

      
    }

    increment = (id) => {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];

      product.count = product.count + 1;
      product.total = product.price * product.count;

      this.setState(() => {
        return {cart:[...tempCart]}
      }, () => {
        this.addTotals();
      }
      )
    }

    removeItem = (id) => {
      let tempProduct = [...this.state.products];
      let tempCart = [...this.state.cart];

      tempCart = tempCart.filter(item => item.id !== id);

      const index = tempProduct.indexOf(this.getItem(id));
      let removedProduct = tempProduct[index];
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;

      this.setState(() => {
        return {
          cart:[...tempCart],
          products:[...tempProduct],
        };
       }, () => {
          this.addTotals();
        }
      );
    }

    clearCart = () => {
      this.setState(() => {
        return {cart: []}
      }, () => {
       this.setProducts(); 
       this.addTotals();
      });
    }
    addTotals = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total));
      const tempTax = subTotal * 0.06;
      const tax = parseFloat(tempTax.toFixed(2));
      const tempTotal = subTotal + tax;
      const total = Math.round(tempTotal * 100) / 100;
      this.setState(() => {
        return {
          cartSubTotal:Math.round(subTotal * 100) / 100,
          cartTax:tax,
          cartTotal:Math.round(total * 100) / 100
        }
      })
    }

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart:this.addToCart,
          openModal:this.openModal,
          closeModal:this.closeModal,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart,

      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};