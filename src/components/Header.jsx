import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  // const { isLogin, setIsLogin } = props;
  // [isLogin, setIsLogin] = useState();

  return (
    <>
      <nav className="nav">
        <div className="container">
          <h1 className="logo">
            <Link to="/" className="navLink">
              Shopping Mall
            </Link>
          </h1>
          <ul>
            <li>
              <Link to={"/"} className="navLink">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="navLink">
                About
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="navLink">
                Products
              </Link>
            </li>
            {/* {isLogin ? ( */}
            <li>
              <Link
                to={"/login"}
                // onClick={() => setIsLogin(false)}
                className="navLink"
              >
                Login
              </Link>
            </li>
            )
            {/* : (
            <li>
              <Link to={"/login"} className="navLink">
                Login
              </Link>
            </li>
            )} */}
            <li>
              <Link to={"/contact"} className="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
