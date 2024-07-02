/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";

import "./Header.css";

function Header() {
  return (
    <nav className="globalNav">
      <a href="http://www.google.com" target="_blanck">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/characters">
          <li>Characters</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Header;
