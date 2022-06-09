import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

function BoardPage() {
  const [board, setBoard] = useState(0);
  let { id } = useParams();
  moment.locale("ko");

  const onClickDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://54.180.53.149:8080/board/${board.boardId}`, {
        headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        if (res.data.result === "FAIL") {
          alert("게시글 삭제에 실패하였습니다.");
        } else {
          alert("게시글 삭제 성공");
          document.location.href = "/";
        }
      })
      .catch();
  };

  useEffect(() => {
    axios
      .get(`http://54.180.53.149:8080/board/${id}`)
      .then((res) => setBoard(res.data.data));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>title:{board.title}</div>
      <div className={styles.container}>writer:{board.writer}</div>
      <div className={styles.container}>content:{board.content}</div>
      <div className={styles.container}>views:{board.views}</div>
      <div>
        <button>Modify</button>
        <button onClick={onClickDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BoardPage;
