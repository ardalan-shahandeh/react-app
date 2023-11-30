import React from "react";

// const Wrapper = (props) => {
//   return <div className="{props.center}">{props.children}</div>;
// };

const Wrapper = (WrappedComponent, className) => {
  return (props) => {
    <div className="{className}">
      <WrappedComponent {...props} />
    </div>;
  };
};

export default Wrapper;
