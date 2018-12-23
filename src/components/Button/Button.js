import React from "react";
import "./style.scss";

const Button = props => {
  return (
    <props.tagName
      className={"button " + props.classNames}
      type={props.type}
      onClick={props.clickHandler}
    >
      {props.children}
    </props.tagName>
  );
};

export default Button;
