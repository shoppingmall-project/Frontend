import axios from "axios";
import styles from "./cssmodules/LoginPage.module.css";
import { useState, useEffect } from "react";

import { useParams } from "react-router";

function QuestionPage() {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://54.180.53.149:8080/question/${id}`)
      .then((res) => {
        setQuestion(res.data.data);
        axios
          .get(`http://54.180.53.149:8080/question/${id}/answer`)
          .then((res) => {
            console.log(res);
            setAnswers(res.data.data);
            console.log(answers);
          });
      })
      .catch();
  }, []);

  return (
    <div className="page">
      <h1>문의</h1>
      <div>문의번호:{question.id}</div>
      <div>작성자:{question.writer}</div>
      <div>제목:{question.title}</div>
      <div>내용:{question.content}</div>
      <div>생성일자:{question.createdDate}</div>
      <div>답변수:{question.answerNum}</div>
      {answers ? (
        <>
          <h1>답변</h1>
          {answers.map((answer) => {
            return (
              <>
                <div>답변번호:{answer.id}</div>
                <div>답변내용:{answer.content}</div>
                <div>작성일자:{answer.createdDate}</div>
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default QuestionPage;
