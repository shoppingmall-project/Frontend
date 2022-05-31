import styles from "./cssmodules/RegisterPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function RegisterPage() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhoneNum, setInputPhoneNum] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputGender = (e) => {
    setInputGender(e.target.value);
  };

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputAddress = (e) => {
    setInputAddress(e.target.value);
  };

  const handleInputPhoneNum = (e) => {
    setInputPhoneNum(e.target.value);
  };

  const onClickRegister = (e) => {
    e.preventDefault();
    axios
      .post(
        " http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/auth",
        {
          account: inputId,
          password: inputPw,
          gender: inputGender,
          role: "M",
          email: inputEmail,
          name: inputName,
          address: inputAddress,
          phoneNum: inputPhoneNum,
        }
      )
      .then((res) => {
        if (res.data.result === "FAIL") {
          alert("회원가입에 실패하였습니다.");
        } else {
          alert("회원가입에 성공하였습니다.");
          document.location.href = "/";
        }
      })
      .catch();
  };

  useEffect(() => {});

  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.text}>Register</div>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="account" className={styles.text}>
              Account
            </label>
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
            <div className="radio">
              <label className={styles.radioBtn}>
                <input
                  type="radio"
                  id="male"
                  value="M"
                  name="gender"
                  onChange={handleInputGender}
                  checked={inputGender === "M"}
                />
                남
              </label>
              <label className={styles.radioBtn}>
                <input
                  type="radio"
                  value="F"
                  id="female"
                  name="gender"
                  onChange={handleInputGender}
                  checked={inputGender === "F"}
                />
                여
              </label>
            </div>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_address">Address</label>
            <input
              className={styles.input}
              type="text"
              value={inputAddress}
              onChange={handleInputAddress}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_phoneNum">Phone Number</label>
            <input
              className={styles.input}
              type="text"
              value={inputPhoneNum}
              onChange={handleInputPhoneNum}
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
