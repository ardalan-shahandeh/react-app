import React, { Component } from "react";
import Wrapper from "../../hoc/Wrapper";

import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="product">
        {this.context.auth ? <p>Logged in !</p> : <p>Please login</p>}

        <p onClick={this.props.click}>Product Name : {this.props.title}</p>

        <p onClick={this.props.click}>Product Price : {this.props.price}$</p>

        <p>{this.props.children}</p>

        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.change}
          value={this.props.title}
        />
      </div>
    );
  }
}
export default Product;
// export default Wrapper(Product, "product");
