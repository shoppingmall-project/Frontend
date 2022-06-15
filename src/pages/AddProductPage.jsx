import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./cssmodules/RegisterPage.module.css";

function AddProductPage() {
  const [inputs, setInputs] = useState({
    category: "",
    name: "",
    price: "",
    stock: "",
    description: "",
    brand: "",
    country: "",
  });
  const [inputFile, setInputFile] = useState(undefined);

  const { category, name, price, stock, description, brand, country } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onChangeFile = (e) => {
    setInputFile(e.target.files[0]);
  };

  const onClickRegister = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://54.180.53.149:8080/goods",
        {
          category: category,
          name: name,
          price: price,
          stock: stock,
          description: description,
          brand: brand,
          country: country,
          file: inputFile,
        },
        {
          headers: { "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken") },
        }
      )
      .then((res) => {
        if (res.data.result === "FAIL") {
          alert("상품 등록에 실패하였습니다.");
        } else {
          alert("상품 등록에 성공하였습니다.");
          document.location.href = "/";
        }
      })
      .catch((e) => console.log(console.error()));
  };

  useEffect(() => {});

  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.text}>Register</div>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="category" className={styles.text}>
              Category
            </label>
            <select name="category" onChange={onChange}>
              <option value="Red Wine" defaultChecked>
                Red Wine
              </option>
              <option value="White Wine">White Wine</option>
              <option value="Rose Wine">Rose Wine</option>
              <option value="Sparkling Wine">Sparkling Wine</option>
              <option value="etc">etc</option>
            </select>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.input}
              type="name"
              value={name}
              name="name"
              onChange={onChange}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="price">price</label>
            <input
              className={styles.input}
              type="number"
              value={price}
              name="price"
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="stock">stock</label>
            <input
              className={styles.input}
              type="number"
              name="stock"
              value={stock}
              onChange={onChange}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="description">description</label>
            <textarea
              className={styles.input}
              name="description"
              value={description}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="brand">brand</label>
            <input
              className={styles.input}
              type="text"
              name="brand"
              value={brand}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="country">country</label>
            <input
              className={styles.input}
              type="text"
              name="country"
              value={country}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="file">Image File</label>
            <input
              className={styles.input}
              type="file"
              name="file"
              onChange={onChangeFile}
              required
            />
          </div>

          <button className={styles.btn} onClick={onClickRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductPage;
