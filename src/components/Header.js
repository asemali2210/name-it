import React from "react";
import img from "../img/header.png";
function Header({ imgExpand }) {
  return (
    <div className="header">
      <img
        src={img}
        alt="header-img"
        className={`header-img ${imgExpand ? `expand` : `con`}`}
      />
      <p>Name It</p>
    </div>
  );
}

export default Header;
