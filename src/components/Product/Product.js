//++++++++++++++ functional component ++++++++++++++
// import "./Product.css";

// const Product = (props) => {
//   return (
//     <div id="product" className="product">
//       <p onClick={props.click}>Product Name : {props.title}</p>

//       <p onClick={props.click}>Product Price : {props.price}$</p>

//       <p>{props.children}</p>

//       <input type="text" onChange={props.change} value={props.title} />
//     </div>
//   );
// };

// export default Product;

//++++++++++++++ Class Component ++++++++++++++

import React, { Component } from "react";

import "./Product.css";


class Product extends Component {
  render() {
    return (
      <div id="product" className="product">
        <p onClick={this.props.click}>Product Name : {this.props.title}</p>

        <p onClick={this.props.click}>Product Price : {this.props.price}$</p>

        <p>{this.props.children}</p>

        <input
          type="text"
          onChange={this.props.change}
          value={this.props.title}
        />
      </div>
    );
  }
}
export default Product;
