import { Link } from "react-router-dom";
import styles from "./modules/LoginPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function LoginPage() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
  };

  useEffect(() => {
    fetch("15.164.49.91:8080/goods")
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
      });
  }, []);

  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.text}>Please Login</div>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="input_id">Account</label>
            <input
              className={styles.input}
              type="text"
              value={inputId}
              onChange={handleInputId}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_pw">Password</label>
            <input
              className={styles.input}
              type="password"
              value={inputPw}
              onChange={handleInputPw}
              required
            />
          </div>

          <button className={styles.btn} onClick={onClickLogin}>
            Login
          </button>

          <div className={styles.sm}>
            Don't have an account?{" "}
            <Link className={styles.sm} to="/register">
              Register
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
