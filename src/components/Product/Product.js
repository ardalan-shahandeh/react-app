// import ProductDesc from "./ProductDesc";

const Product = (props) => {
  // const price = "99$";

  return (
    <div id="product" className="product">
      <p>Product Name : {props.title}</p>

      <p>Product Price : {props.price}$</p>

      {/* <p>Product Price: {price}</p> */}

      <p>{props.children}</p>

      {/* <ProductDesc description="This Book Is very good for young and old peoples" /> */}
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
