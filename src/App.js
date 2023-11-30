import React from "react";

import ProductList from "./components/ProductList/ProductList";
import Main from "./components/Main/Main";
import Wrapper from "./hoc/Wrapper";
import Container from "./hoc/Container";
import AuthContext from "./context/auth-context";

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
    auth: false,
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

  loginHandler = () => {
    this.setState({ auth: true });
  };

  render() {
    let products = null;

    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.changeTitleHandler}
            isAuth={this.state.auth}
          />
        </div>
      );
    }

    return (
      <div className="center">
        <AuthContext.Provider
          value={{ auth: this.state.auth, login: this.loginHandler }}
        >
          <Main
            // products={this.state.products}
            click={this.toggleProductHandler}
            login={this.loginHandler}
          />

          {products}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
// export default Wrapper(App, 'center');
