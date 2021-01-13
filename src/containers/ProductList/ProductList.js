import React, {  Component } from "react";

import Product from "../../components/Product/Product";
import sofa from '../../assets/sofa.jpg';
import armchair from '../../assets/armchair.jpg';
import table from '../../assets/table.jpg';
import chair from '../../assets/chair.jpg';

import "./ProductList.scss"

class ProductList extends Component {
  constructor() {
      super();
      this.render();
  }

  state = {
    isBuy: false,
  };

  buy = () => {
    this.isBuy.useState = {
      isBuy: !this.state.isBuy,
    };
  };
  render() {
    return (
      <div>
        <Product name="Sofa" price="200$" img={sofa} buttonClick="buy()">
          {this.isBuy ? " Item bought" : ""}
        </Product>
        <Product name="Armchair" price="100$" img={armchair} buttonClick="buy()">
          {this.isBuy ? " Item bought" : ""}{" "}
        </Product>
        <Product name="Table" price="100$" img={table} buttonClick="buy()">
          {this.isBuy ? " Item bought" : ""}{" "}
        </Product>
        <Product name="Chair" price="20$" img={chair} buttonClick="buy()">
          {this.isBuy ? " Item bought" : ""}
        </Product>
      </div>
    );
  }
}

export default ProductList