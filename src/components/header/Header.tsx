import React from "react";
import "./header.css";
type headerProps = {};

const Header: React.FC<headerProps> = () => {
  return (
    <header className="App-header">
      <p>Share your profile on :</p>
      <div className="links">
        <span>
          <a href="#">LinkedIn</a>
        </span>
        <span>
          <a href="#">Twitter</a>
        </span>
        <span>
          <a href="#">Facebook</a>
        </span>
        <span>
          <a href="#">Get HTML</a>
        </span>
      </div>
    </header>
  );
};
export default Header;
