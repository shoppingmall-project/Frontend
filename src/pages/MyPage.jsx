import { useState, useEffect } from "react";
import styles from "./cssmodules/RegisterPage.module.css";
import axios from "axios";

function MyPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    id: 0,
    account: "",
    pw: "",
    gender: "",
    name: "",
    email: "",
    address: "",
    phoneNum: "",
    role: "",
  });
  const { id, account, pw, gender, name, email, address, phoneNum, role } =
    inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onClickModify = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://54.180.53.149:8080/auth/${id}`,
        {
          password: pw,
          role: role,
          email: email,
          phoneNum: phoneNum,
          address: address,
        },
        { headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") } }
      )
      .then((res) => {
        console.log(res);
        if (res.data.result === "FAIL") {
          alert("회원정보 수정에 실패하였습니다.");
        } else {
          alert("회원정보 수정 성공");
          document.location.href = "/";
        }
      })
      .catch();
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://54.180.53.149:8080/auth/${id}`, {
        headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        if (res.data.result === "FAIL") {
          alert("회원 탈퇴에 실패하였습니다.");
        } else {
          alert("회원 탈퇴 성공");
          sessionStorage.clear();
          document.location.href = "/";
        }
      })
      .catch();
  };

  useEffect(() => {
    let id = sessionStorage.getItem("id");
    setInputs({ ...inputs, id });
    axios
      .get(`http://54.180.53.149:8080/auth/${id}`, {
        headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") },
      })
      .catch((err) => console.log(err))
      .then((res) => {
        const user = res.data.data;
        const { id, account, address, email, gender, phoneNum, name, role } =
          user;
        setInputs({
          ...inputs,
          id,
          account,
          address,
          email,
          gender,
          phoneNum,
          name,
          role,
        });
      });
    setIsLoading(true);
  }, []);

  return (
    isLoading && (
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
                name="account"
                type="text"
                value={account}
                readOnly
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="input_pw">Password</label>
              <input
                className={styles.input}
                name="pw"
                type="password"
                onChange={onChange}
                required
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="input_name">Name</label>
              <input
                className={styles.input}
                name="name"
                type="name"
                value={name}
                readOnly
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="input_email">email</label>
              <input
                className={styles.input}
                name="email"
                type="email"
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
                    checked={gender === "M"}
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
                    checked={gender === "F"}
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
                name="address"
                type="text"
                value={address}
                onChange={onChange}
                required
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="input_phoneNum">Phone Number</label>
              <input
                className={styles.input}
                name="phoneNum"
                type="text"
                value={phoneNum}
                onChange={onChange}
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
    )
  );
}

export default MyPage;
