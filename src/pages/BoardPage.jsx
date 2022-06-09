import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

function BoardPage() {
  const [board, setBoard] = useState(0);
  let { id } = useParams();
  moment.locale("ko");
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
    </div>
  );
}

export default BoardPage;
