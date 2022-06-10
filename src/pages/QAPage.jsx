import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { Link } from "react-router-dom";

function QAPage() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get("http://54.180.53.149:8080/question").then((res) => {
      setQuestions(res.data.data);
    });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        Q&A
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
              <th>writer</th>
              <th>content</th>
              <th>createdAt</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => {
              return (
                <tr key={question.id}>
                  <td>{question.id}</td>
                  <td>
                    <Link to={"./" + question.id}>{question.title}</Link>
                  </td>
                  <td>{question.writer}</td>
                  <td>{question.content}</td>
                  <td>
                    {moment(question.createdDate).add(9, "hours").format("lll")}
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

export default QAPage;
