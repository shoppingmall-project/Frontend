import styles from "./cssmodules/CommunityPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";

function ManagerPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://54.180.53.149:8080/auth", {
        headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setUsers(res.data.data);
      });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        Community
        <table className={styles.table}>
          {/* <colgroup>
            <col className={styles.id} />
            <col className={styles.title} />
            <col className={styles.author} />
            <col className={styles.views} />
            <col className={styles.createdDate} />
          </colgroup> */}
          <thead>
            <tr>
              <th>id</th>
              <th>account</th>
              <th>name</th>
              <th>role</th>
              <th>email</th>
              <th>gender</th>
              <th>createdDate</th>
              <th>address</th>
              <th>phoneNum</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.account}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.createdDate}</td>
                  <td>{user.address}</td>
                  <td>{user.phoneNum}</td>
                  <td>
                    {moment(user.createdDate).add(9, "hours").format("lll")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManagerPage;
