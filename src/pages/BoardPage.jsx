import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { Link, useParams } from "react-router-dom";

function BoardPage() {
  const [board, setBoard] = useState(0);
  const [isWriter, setIsWriter] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

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
    let userId = sessionStorage?.getItem("id");
    axios
      .get(`http://54.180.53.149:8080/auth/${userId}`, {
        headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        console.log(res);
      });
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
      <div className={styles.container}>
        createdAt:{moment(board.createdDate).add(9, "hours").format("lll")}
      </div>
      <div>
        <button>Modify</button>
        <button onClick={onClickDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BoardPage;
