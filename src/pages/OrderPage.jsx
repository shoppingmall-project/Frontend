import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import styles from "./cssmodules/RegisterPage.module.css";

function OrderPage() {
  const { productid } = useParams();
  const [inputs, setInputs] = useState({
    goods_id: productid,
    request: "",
    count: 0,
    payment: "",
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onClickOrder = (e) => {
    e.preventDefault();
    const { goods_id, request, count, payment } = inputs;
    console.log(inputs);
    axios
      .post(
        "http://54.180.53.149:8080/order",
        {
          goods_id,
          request,
          count,
          payment,
        },
        { headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") } }
      )
      .then((res) => {
        console.log(res);
        if (res.data.result === "FAIL") {
          alert("주문에 실패하였습니다.");
        } else {
          alert("주문에 성공하였습니다.");
        }
      })
      .catch();
  };

  useEffect(() => {});

  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.text}>Order</div>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="count">count</label>
            <input
              className={styles.input}
              type="number"
              value={inputs.count}
              name="count"
              onChange={onChange}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="request">request</label>
            <textarea
              cols="30"
              rows="5"
              name="request"
              className={styles.textarea}
              value={inputs.request}
              onChange={onChange}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="payment" className={styles.text}>
              Payment
            </label>
            <select name="payment" onChange={onChange}>
              <option value="1" defaultChecked>
                신용카드
              </option>
              <option value="2">네이버페이</option>
              <option value="3">카카오페이</option>
              <option value="4">휴대폰 결제</option>
            </select>
          </div>

          <button className={styles.btn} onClick={onClickOrder}>
            Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderPage;
