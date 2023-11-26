// import React from "react";

// const App = () => {
//   return React.createElement(
//     "div",
//     { id: "main", className: "container" },
//     "Hello World From App Component!"
//   );
// };

// export default App;

// ==========Other Syntax++++++++++++

// import React from "react";
// import Product from "./components/Product/Product";

// const App = () => {
//   return (
//     <div id="main" className="main">
//       <h2>Hello From Component</h2>

//       <Product />
//     </div>
//   );
// };

// export default App;

// ===============With Class+++++++++++++

import React from "react";
import ProductList from "./components/ProductList/ProductList";
import Main from "./components/Main/Main";

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

  // changeTitleHandler = (event) => {
  //   this.setState({
  //     products: [
  //       { title: "Book 1", price: "150" },
  //       { title: event.target.value, price: "250" },
  //       { title: "Book 3", price: "350" },
  //       { title: "Book 4", price: "450" },
  //     ],
  //   });
  // };

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

      // products = (
      //   <div>
      //     <Product
      //       title={this.state.products[0].title}
      //       price={this.state.products[0].price}
      //     />
      //     <hr />

      //     <Product
      //       title={this.state.products[1].title}
      //       price={this.state.products[1].price}
      //       change={this.changeTitleHandler}
      //     >
      //       Discount 20 %
      //     </Product>
      //     <hr />

      //     <Product
      //       title={this.state.products[2].title}
      //       price={this.state.products[2].price}
      //     />
      //     <hr />

      //     <Product
      //       title={this.state.products[3].title}
      //       price={this.state.products[3].price}
      //       // click={this.changePriceHandler}
      //       // click={this.changePriceHandler.bind(this, "New Title")}
      //       click={() => this.changePriceHandler("New Title")}
      //     />
      //   </div>
      // );
    }

    return (
      <div id="main" className="center">
        <h1>Book Store</h1>

        <Main click={this.toggleProductHandler} />

        {products}

        {/* {this.state.showProducts ? (
          <div>
            <Product
              title={this.state.products[0].title}
              price={this.state.products[0].price}
            />
            <hr />

            <Product
              title={this.state.products[1].title}
              price={this.state.products[1].price}
              change={this.changeTitleHandler}
            >
              Discount 20 %
            </Product>
            <hr />

            <Product
              title={this.state.products[2].title}
              price={this.state.products[2].price}
            />
            <hr />

            <Product
              title={this.state.products[3].title}
              price={this.state.products[3].price}
              // click={this.changePriceHandler}
              // click={this.changePriceHandler.bind(this, "New Title")}
              click={() => this.changePriceHandler("New Title")}
            />
          </div>
        ) : null} */}

        {/* <button onClick={this.changePriceHandler} style={btn}>
          Change Price{" "}
        </button> */}
      </div>
    );
  }
}

// ==================with useState +++++++++++++++

// import React, { useState } from "react";
// import Product from "./components/Product/Product";

// const App = (props) => {
//   const [productState, setProductState] = useState({
//     products: [
//       { title: "Book 1", price: "100" },
//       { title: "Book 2", price: "200" },
//       { title: "Book 3", price: "300" },
//       { title: "Book 4", price: "400" },
//     ],
//   });

//   const changePriceHandler = () => {
//     setProductState({
//       products: [
//         { title: "Book 1", price: "150" },
//         { title: "Book 2", price: "250" },
//         { title: "Book 3", price: "350" },
//         { title: "Book 4", price: "450" },
//       ],
//     });
//   };

//   return (
//     <div id="main" className="main">
//       <h1>React App</h1>

//       <Product
//         title={productState.products[0].title}
//         price={productState.products[0].price}
//       />
//       <hr />

//       <Product
//         title={productState.products[1].title}
//         price={productState.products[1].price}
//       >
//         Discount 20 %
//       </Product>
//       <hr />

//       <Product
//         title={productState.products[2].title}
//         price={productState.products[2].price}
//       />
//       <hr />

//       <Product
//         title={productState.products[3].title}
//         price={productState.products[3].price}
//       />
//       <button onClick={changePriceHandler}>Change Price</button>
//     </div>
//   );
// };

export default App;
