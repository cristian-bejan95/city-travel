import "./header.css";
import { BsBackpack2Fill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container mx-auto">
          <Link className="logo" to="/">
            <BsBackpack2Fill className="icon" />
            <span>City Travel</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/places">Places</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link
                  className="p-2 rounded-md border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:!text-black"
                  to=""
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          <div className="menu-btn" onClick={() => setShowMenu(true)}>
            <IoMenu />
          </div>
        </div>
      </header>
      <div className="menu" style={{ right: showMenu ? "0px" : "-300px" }}>
        <div>
          <IoIosClose
            className="menu-close"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link
                className="p-2 rounded-md border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:!text-black"
                to=""
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
