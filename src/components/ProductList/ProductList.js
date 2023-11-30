// import React from "react";
// import Product from "../Product/Product";

// const ProductList = (props) => {
//   return props.products.map((item, index) => {
//     return (
//       <Product
//         click={() => props.click(index)}
//         title={item.title}
//         price={item.price}
//         key={item.id}
//         change={(event) => props.change(event, item.id)}
//       />
//     );
//   });
// };

// export default ProductList;

import React, { Component } from "react";

import Product from "../Product/Product";

class ProductList extends Component {
  render() {
    return this.props.products.map((item, index) => {
      return (
        <Product
          click={() => this.props.click(index)}
          title={item.title}
          price={item.price}
          key={item.id}
          change={(event) => this.props.change(event, item.id)}
          isAuth={this.props.isAuth}
        />
      );
    });
  }
}

export default ProductList;
