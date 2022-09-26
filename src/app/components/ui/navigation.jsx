import React from "react";

const MenuOverlay = ({ navBarOpen, setNavBarOpen }) => {
  return (
    <ul
      className={
        navBarOpen
          ? "Header__Nav--Open"
          : "Header__Nav--Closed" + " Header__Nav"
      }
    >
      <li>
        <a href="/" onClick={() => setNavBarOpen(false)}>
          Home
        </a>
      </li>
      <li>
        <a href="/natur" onClick={() => setNavBarOpen(false)}>
          Natur
        </a>
      </li>
      <li>
        <a href="/Landschaft" onClick={() => setNavBarOpen(false)}>
          Landschaft
        </a>
      </li>
      <li>
        <a href="/reisen" onClick={() => setNavBarOpen(false)}>
          Reisen
        </a>
      </li>
      <li>
        <a href="/kontakt" onClick={() => setNavBarOpen(false)}>
          Kontakt
        </a>
      </li>
      <li>
        <a href="/impressum" onClick={() => setNavBarOpen(false)}>
          Impressum
        </a>
      </li>
    </ul>
  );
};

export default MenuOverlay;
