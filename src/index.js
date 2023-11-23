// import React from "react";
// import ReactDOM from "react-dom/client";

// const element = <h1> hello World! </h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// *******************

// import React from "react";
// import ReactDOM from "react-dom";

// const element = React.createElement(
//   "div",
//   {
//     id: "main",
//     className: "container",
//   },
//   "Hello World!"
// );

// ReactDOM.render(element, document.getElementById("root"));

// *******************

// import React from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   return React.createElement(
//     "div",
//     {
//       id: "main",
//       className: "container",
//     },
//     "Hello World!"
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

// *******************

import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
