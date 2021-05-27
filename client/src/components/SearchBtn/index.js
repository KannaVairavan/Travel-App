import React from "react";
import "./style.css";
import API from '../../utils/API'

const SearchBtn = props => {

  return (
    <button {...props} role = 'button'
    > Search! 
    </button>
  );
}

export default SearchBtn;
