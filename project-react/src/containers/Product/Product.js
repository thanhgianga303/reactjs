import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import ProductContent from '../../components/MainContent/ProductContent/ProductContent';
class Product extends Component {
  render() {
      return (
        <div>
                <Header />
                <div id="layoutSidenav">
                    <NavigationMenu />
                    <ProductContent />
                </div>
        </div>
    );
  }
}

export default Product;
