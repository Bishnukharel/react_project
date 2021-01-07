import React from "react";
import "./searchbox.styles.css";

function Searchbox({ placeholder, handleChange }) {
  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
}
export default Searchbox;
