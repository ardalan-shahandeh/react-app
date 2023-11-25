// import ProductDesc from "./ProductDesc";
import "./Product.css";

const Product = (props) => {
  // const price = "99$";

  return (
    <div id="product" className="product">
      <p onClick={props.click}>Product Name : {props.title}</p>

      <p onClick={props.click}>Product Price : {props.price}$</p>

      {/* <p>Product Price: {price}</p> */}

      <p>{props.children}</p>

      {/* <ProductDesc description="This Book Is very good for young and old peoples" /> */}

      <input type="text" onChange={props.change} value={props.title} />
    </div>
  );
};

export default Product;

// import React from "react";

// const Product = () => {
//   return React.createElement(
//     "div",
//     { id: "Product", className: "Product" },
//     "salam"
//   );
// };

// export default Product;
