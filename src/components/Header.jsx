import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("jwtToken")) setIsLogin(true);
  }, []);

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
              <Link to={"/products"} className="navLink">
                Products
              </Link>
            </li>
            <li>
              <Link to={"/community"} className="navLink">
                Community
              </Link>
            </li>
            {isLogin ? (
              <>
                <li>
                  <Link
                    to={"/"}
                    onClick={() => {
                      setIsLogin(false);
                      sessionStorage.clear();
                    }}
                    className="navLink"
                  >
                    Logout
                  </Link>
                </li>
                <li>
                  <Link to={"/myPage"} className="navLink">
                    My Page
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to={"/login"} className="navLink">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
