import styles from "./cssmodules/RegisterPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function RegisterPage() {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    gender: "",
    name: "",
    email: "",
    address: "",
    phoneNum: "",
  });

  const { id, pw, gender, name, email, address, phoneNum } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onClickRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://54.180.53.149:8080/auth", {
        account: id,
        password: pw,
        gender: gender,
        role: "U",
        email: email,
        name: name,
        address: address,
        phoneNum: phoneNum,
      })
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
              name="id"
              value={id}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_pw">Password</label>
            <input
              className={styles.input}
              type="password"
              value={pw}
              name="pw"
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_name">Name</label>
            <input
              className={styles.input}
              type="text"
              value={name}
              name="name"
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_email">email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_gender">Gender</label>
            <div className="radio">
              <label className={styles.radioBtn}>
                <input
                  type="radio"
                  id="male"
                  value="M"
                  name="gender"
                  onChange={onChange}
                  checked={gender === "M"}
                />
                남
              </label>
              <label className={styles.radioBtn}>
                <input
                  type="radio"
                  value="F"
                  id="female"
                  name="gender"
                  onChange={onChange}
                  checked={gender === "F"}
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
              name="address"
              value={address}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_phoneNum">Phone Number</label>
            <input
              className={styles.input}
              type="text"
              name="phoneNum"
              value={phoneNum}
              onChange={onChange}
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
