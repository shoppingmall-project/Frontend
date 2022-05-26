import { Link } from "react-router-dom";
import styles from "./cssmodules/RegisterPage.module.css";
import { useState, useEffect } from "react";

function RegisterPage() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.email);
  };

  const onClickRegister = () => {
    console.log("click Register");
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
        <div className={styles.text}>Register</div>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="account">Account</label>
            <input
              className={styles.input}
              id="account"
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

          <div className={styles.formControl}>
            <label htmlFor="input_pw">Name</label>
            <input
              className={styles.input}
              type="name"
              value={inputName}
              onChange={handleInputName}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_pw">email</label>
            <input
              className={styles.input}
              type="email"
              value={inputEmail}
              onChange={handleInputEmail}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_pw">Gender</label>
            <input
              className={styles.input}
              type="radio"
              value={inputPw}
              onChange={handleInputPw}
              required
            />
            <input
              className={styles.input}
              type="radio"
              value={inputPw}
              onChange={handleInputPw}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_address">Address</label>
            <input
              className={styles.input}
              type="text"
              value={inputPw}
              onChange={handleInputPw}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_phoneNum">Phone Number</label>
            <input
              className={styles.input}
              type="text"
              value={inputPw}
              onChange={handleInputPw}
              required
            />
          </div>

          <button className={styles.btn} onClick={onClickRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
