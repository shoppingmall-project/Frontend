import { Link } from "react-router-dom";
import styles from "./cssmodules/LoginPage.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function WritingPage() {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onClickPost = (e) => {
    e.preventDefault();
    console.log(inputTitle, inputContent);
    axios
      .post(
        "http://54.180.53.149:8080/board",
        {
          title: inputTitle,
          content: inputContent,
        },
        { headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") } }
      )
      .then((res) => {
        if (res.data.result === "FAIL") {
          alert("작성에 실패하였습니다.");
        } else {
          navigate(-1);
        }
      })
      .catch();
  };

  useEffect(() => {}, []);

  return (
    <div className="page">
      <div className={styles.container}>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="input_id">Title</label>
            <input
              className={styles.input}
              type="text"
              value={inputTitle}
              onChange={handleInputTitle}
              required
            />
          </div>

          <div className={styles.formControl}>
            <textarea
              cols="30"
              rows="5"
              className={styles.textarea}
              value={inputContent}
              onChange={handleInputContent}
              required
            />
          </div>

          <button className={styles.btn} onClick={onClickPost}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default WritingPage;
