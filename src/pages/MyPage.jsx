import { useState, useEffect } from "react";
import styles from "./cssmodules/RegisterPage.module.css";
import axios from "axios";

function MyPage() {
  const [inputId, setInputId] = useState("");
  const [inputAccount, setInputAccount] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhoneNum, setInputPhoneNum] = useState("");

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
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

  const onClickModify = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/auth/${inputId}`,
        {
          password: inputPw,
          role: "M",
          email: inputEmail,
          address: inputAddress,
          phoneNum: inputPhoneNum,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.result === "FAIL") {
          alert("회원정보 수정에 실패하였습니다.");
        } else alert("회원정보 수정 성공");
        console.log(res.data.data);
        const { account, token } = res.data.data;
        console.log(token, account);
        sessionStorage.setItem("jwtToken", token);
      })
      .catch();
    document.location.href = "/login";
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    axios
      .delete(
        `http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/auth/${inputId}`
      )
      .then((res) => {
        if (res.data.result === "FAIL") {
          alert("회원 탈퇴에 실패하였습니다.");
        } else {
          alert("회원 탈퇴 성공");
          sessionStorage.clear();
        }
      })
      .catch();
    document.location.href = "/";
  };

  useEffect(() => {
    const sessionAccount = sessionStorage.getItem("account");
    axios
      .get(
        `http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/auth`
      )
      .then((res) => {
        const users = res.data.data;
        const [user] = users.filter((user) => user.account === sessionAccount);
        setInputId(user.id);
        setInputAccount(user.account);
        setInputAddress(user.address);
        setInputEmail(user.email);
        setInputGender(user.gender);
        setInputPhoneNum(user.phoneNum);
        setInputName(user.name);
      });
  }, []);

  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.text}>My Info</div>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="account" className={styles.text}>
              Account
            </label>
            <input
              className={styles.input}
              id="account"
              type="text"
              value={inputAccount}
              readOnly
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
            <label htmlFor="input_name">Name</label>
            <input
              className={styles.input}
              type="name"
              value={inputName}
              readOnly
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="input_email">email</label>
            <input
              className={styles.input}
              type="email"
              value={inputEmail}
              onChange={handleInputEmail}
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
                  checked={inputGender === "M"}
                  readOnly
                />
                남
              </label>
              <label className={styles.radioBtn}>
                <input
                  type="radio"
                  value="F"
                  id="female"
                  name="gender"
                  checked={inputGender === "F"}
                  readOnly
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

          <button className={styles.btn} onClick={onClickModify}>
            Modify
          </button>
          <button className={styles.btn} onClick={onClickDelete}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyPage;
