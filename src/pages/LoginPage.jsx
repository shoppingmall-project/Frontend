import { Link } from "react-router-dom";
import styles from "./cssmodules/LoginPage.module.css";
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

  const onClickLogin = (e) => {
    e.preventDefault();
    console.log(inputId);
    axios
      .post(
        "http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
        { account: inputId, password: inputPw }
      )
      .then((res) => {
        console.log(res);
        if (res.data.result === "FAIL") {
          alert("로그인에 실패하였습니다.");
        } else {
          console.log("로그인 성공");
          console.log(res.data.data);
          const { account, token } = res.data.data;
          console.log(token, account);
          sessionStorage.setItem("jwtToken", token);
        }
        document.location.href = "/";
      })
      .catch();
  };

  useEffect(() => {});

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
            Don't have an account?
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
