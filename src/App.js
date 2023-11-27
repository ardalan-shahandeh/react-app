import React from "react";
import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

class App extends React.Component {
  state = {
    products: [
      { id: 1, title: "Book 1", price: "100" },
      { id: 2, title: "Book 2", price: "200" },
      { id: 3, title: "Book 3", price: "300" },
      { id: 4, title: "Book 4", price: "400" },
    ],
    showProducts: false,
  };

  changePriceHandler = (newTitle) => {
    this.setState({
      products: [
        { title: newTitle, price: "150" },
        { title: "Book 2", price: "250" },
        { title: "Book 3", price: "350" },
        { title: "Book 4", price: "450" },
      ],
    });
  };

  changeTitleHandler = (event, id) => {
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id;
    });

    const product = { ...this.state.products[productIndex] };

    product.title = event.target.value;

    const products = [...this.state.products];

    products[productIndex] = product;

    this.setState({ products: products });
  };

  toggleProductHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
  };

  deleteProductHandler = (productIndex) => {
    const products = [...this.state.products];

    products.splice(productIndex, 1);

    this.setState({ products: products });
  };

  render() {
    const btn = {
      backgroundColor: "#7b1fa2",
      color: "#ffffff",
      font: "inherit",
      border: "none",
      outline: "none",
      borderRadius: "3px",
      padding: "0.6rem",
      margin: "0.6rem auto",
    };

    let products = null;

    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.changeTitleHandler}
          />
        </div>
      );
    }

    return (
      <div id="main" className="center">
        <Main
          // products={this.state.products}
          click={this.toggleProductHandler}
        />

        {products}
      </div>
    );
  }
}

export default App;
