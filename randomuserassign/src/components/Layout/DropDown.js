import React from "react";
import './Button.css';

const DropDown = (props) => {
  return (
    <div className="btn-group dropdown">
      <select name="" id="" className="page-link" onChange={props.dropDown}>
        <option value="5">
          5
        </option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default DropDown;
