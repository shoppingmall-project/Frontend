import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

function CommunityPage() {
  const [boards, setBoards] = useState([]);
  const [board, setBoard] = useState(0);
  let { id } = useParams();
  moment.locale("ko");
  useEffect(() => {
    if (id)
      axios
        .get(`http://54.180.53.149:8080/board/${id}`)
        .then((res) => setBoard(res.data.data));
    axios.get("http://54.180.53.149:8080/board").then((res) => {
      setBoards(res.data.data);
    });
  }, []);

  if (!id)
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          Community
          <table className={styles.table}>
            <colgroup>
              <col className={styles.id} />
              <col className={styles.title} />
              <col className={styles.author} />
              <col className={styles.views} />
              <col className={styles.createdDate} />
            </colgroup>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>author</th>
                <th>views</th>
                <th>createdAt</th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => {
                return (
                  <tr key={board.boardId}>
                    <td>{board.boardId}</td>
                    <Link to={"./" + board.boardId}>
                      <td>{board.title}</td>
                    </Link>
                    <td>{board.writer}</td>
                    <td>{board.views}</td>
                    <td>{moment(board.createdDate).format("lll")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="./writing">
            <button>Post</button>
          </Link>
        </div>
      </div>
    );
  return (
    <div className={styles.page}>
      <div className={styles.container}>title:{board.title}</div>
      <div className={styles.container}>title:{board.title}</div>
      <div className={styles.container}>title:{board.title}</div>
      <div className={styles.container}>title:{board.title}</div>
    </div>
  );
}

export default CommunityPage;
