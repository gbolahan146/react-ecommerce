import React from "react";
import "./style.scss";
const Button = ({ type, placeholder, google }) => (
  <div>
    <button className={`${google ? "google" : ""} btn`} type={type}>
      {placeholder}
    </button>
  </div>
);

export default Button;
