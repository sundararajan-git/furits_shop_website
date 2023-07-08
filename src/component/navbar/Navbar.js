import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menubar, setmenubar] = useState(false);
  const navigate = useNavigate();
  const handlemenubar = () => {
    setmenubar(!menubar);
  };
  return (
    <div>
      <nav className="navbar fixed-to">
        <div className="head">
          <h1 onClick={() => navigate("/")}>
            <i className="fa-solid fa-apple-whole fa-lg"></i>
            {` BERRY`}
          </h1>
        </div>
        <div onClick={handlemenubar} className="menubar">
          <i className={menubar ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={menubar ? "items-active" : "items"}>
          <li className="li">
            <Link to={"/"} onClick={() => setmenubar(false)}>
              Home
            </Link>
          </li>
          <li className="li">
            <Link to={"/cart"} onClick={() => setmenubar(false)}>
              Cart
            </Link>
          </li>
          <li className="li">
            <Link to={"/Profile"} onClick={() => setmenubar(false)}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
