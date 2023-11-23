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

// import React from "react";
// import Product from "./components/Product/Product";

// class App extends React.Component {
//   state = {
//     products: [
//       { title: "Book 1", price: "100" },
//       { title: "Book 2", price: "200" },
//       { title: "Book 3", price: "300" },
//       { title: "Book 4", price: "400" },
//     ],
//   };

//   changePriceHandler = () => {
//     this.setState({
//       products: [
//         { title: "Book 1", price: "150" },
//         { title: "Book 2", price: "250" },
//         { title: "Book 3", price: "350" },
//         { title: "Book 4", price: "450" },
//       ],
//     });
//   };

//   render() {
//     return (
//       <div id="main" className="main">
//         <h1>Hello From Component</h1>

//         <Product
//           title={this.state.products[0].title}
//           price={this.state.products[0].price}
//         />
//         <hr />

//         <Product
//           title={this.state.products[1].title}
//           price={this.state.products[1].price}
//         >
//           Discount 20 %
//         </Product>
//         <hr />

//         <Product
//           title={this.state.products[2].title}
//           price={this.state.products[2].price}
//         />
//         <hr />

//         <Product
//           title={this.state.products[3].title}
//           price={this.state.products[3].price}
//         />
//         <button onClick={this.changePriceHandler}>Change Price</button>
//       </div>
//     );
//   }
// }

// ==================with useState +++++++++++++++

import React, { useState } from "react";
import Product from "./components/Product/Product";

const App = (props) => {
  const [productState, setProductState] = useState({
    products: [
      { title: "Book 1", price: "100" },
      { title: "Book 2", price: "200" },
      { title: "Book 3", price: "300" },
      { title: "Book 4", price: "400" },
    ],
  });

  const changePriceHandler = () => {
    setProductState({
      products: [
        { title: "Book 1", price: "150" },
        { title: "Book 2", price: "250" },
        { title: "Book 3", price: "350" },
        { title: "Book 4", price: "450" },
      ],
    });
  };

  return (
    <div id="main" className="main">
      <h1>React App</h1>

      <Product
        title={productState.products[0].title}
        price={productState.products[0].price}
      />
      <hr />

      <Product
        title={productState.products[1].title}
        price={productState.products[1].price}
      >
        Discount 20 %
      </Product>
      <hr />

      <Product
        title={productState.products[2].title}
        price={productState.products[2].price}
      />
      <hr />

      <Product
        title={productState.products[3].title}
        price={productState.products[3].price}
      />
      <button onClick={changePriceHandler}>Change Price</button>
    </div>
  );
};

export default App;
