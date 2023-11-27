import React, { useEffect } from "react";

const Main = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("Ostad Bagheri");
  //   }, 2000);
  // }, [props.products]);

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

  return (
    <div>
      <h1>Book Store</h1>
      <button onClick={props.click} style={btn}>
        Show/Hide Product
      </button>
    </div>
  );
};
export default Main;
