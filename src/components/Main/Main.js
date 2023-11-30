import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";

const Main = (props) => {
  const btnRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    btnRef.current.click();
    return () => {
      console.log("Main.js cleanUp");
    };
  }, []);

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
      <button ref={btnRef} onClick={props.click} style={btn}>
        Show/Hide Product
      </button>

      <button onClick={authContext.login}>Login</button>
    </div>
  );
};
export default Main;
