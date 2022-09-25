import React from "react";
import Logo from "../../../logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <form>
          <input
            className="Header__SearchField"
            type="text"
            placeholder="Search"
          />
          <button className="Header__SearchIcon"></button>
        </form>
        <img src={Logo} alt="the.blog logo" />
        <div>
          <button className="Header__Button">Anmelden</button>
          <button className="Header__Button">Menu</button>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
