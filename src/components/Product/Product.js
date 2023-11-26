import "./Product.css";

const Product = (props) => {

  return (
    <div id="product" className="product">
      <p onClick={props.click}>Product Name : {props.title}</p>

      <p onClick={props.click}>Product Price : {props.price}$</p>

      <p>{props.children}</p>

      <input type="text" onChange={props.change} value={props.title} />
    </div>
  );
};

export default Product;
