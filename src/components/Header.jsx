import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isManager, setIsManager] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("jwtToken")) setIsLogin(true);
    axios
      .get(`http://54.180.53.149:8080/auth/${sessionStorage.getItem("id")}`)
      .then((res) => {
        if (res.data.data.role === "M") setIsManager(true);
      })
      .catch();
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
            {isManager === true ? (
              <>
                <li>
                  <Link to={"/manager"} className="navLink">
                    manager
                  </Link>
                </li>
                <li>
                  <Link to={"/myPage"} className="navLink">
                    My Page
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
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
