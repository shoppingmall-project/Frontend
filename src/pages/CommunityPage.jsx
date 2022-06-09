import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { Link } from "react-router-dom";

function CommunityPage() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    axios.get("http://54.180.53.149:8080/board").then((res) => {
      setBoards(res.data.data);
    });
  }, []);

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
                  <td>
                    <Link to={"./" + board.boardId}>{board.title}</Link>
                  </td>
                  <td>{board.writer}</td>
                  <td>{board.views}</td>
                  <td>
                    {moment(board.createdDate).add(9, "hours").format("lll")}
                  </td>
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
}

export default CommunityPage;
