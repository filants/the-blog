import React from "react";
import Logo from "../../../logo.svg";

const Header = ({ navBarOpen, setNavBarOpen }) => {
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
          <button className="Header__Button">
            <a href="/login">Anmelden</a>
          </button>
          <button
            className="Header__Button"
            onClick={() => setNavBarOpen(!navBarOpen)}
          >
            Menu
          </button>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
