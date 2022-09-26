import React from "react";
import { Link } from "react-router-dom";

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
        <Link onClick={() => setNavBarOpen(false)} aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setNavBarOpen(false)}
          aria-current="page"
          to="/natur"
        >
          Natur
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setNavBarOpen(false)}
          aria-current="page"
          to="/landschaft"
        >
          Landschaft
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setNavBarOpen(false)}
          aria-current="page"
          to="/reisen"
        >
          Reisen
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setNavBarOpen(false)}
          aria-current="page"
          to="/kontakt"
        >
          Kontakt
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setNavBarOpen(false)}
          aria-current="page"
          to="/impressum"
        >
          Impressum
        </Link>
      </li>
    </ul>
  );
};

export default MenuOverlay;
