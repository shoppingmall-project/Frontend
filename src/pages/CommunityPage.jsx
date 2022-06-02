import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function CommunityPage() {
  const [boards, setBoards] = useState([]);
  moment.locale("ko");
  useEffect(() => {
    axios
      .get(
        "http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/board"
      )
      .then((res) => {
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
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>views</th>
            <th>createdAt</th>
          </thead>
          <tbody>
            {boards.map((board) => {
              return (
                <tr>
                  <td>{board.boardId}</td>
                  <td>{board.title}</td>
                  <td>{board.author}</td>
                  <td>{board.views}</td>
                  <td>{moment(board.createdDate).format("lll")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommunityPage;
