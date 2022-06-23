import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./cssmodules/RegisterPage.module.css";

function AddProductPage() {
  const [inputs, setInputs] = useState({
    category: "Red Wine",
    name: "",
    price: "",
    stock: "",
    description: "",
    brand: "",
    country: "",
  });
  const [inputFile, setInputFile] = useState(undefined);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onChangeFile = (e) => {
    setInputFile(e.target.files[0]);
  };

  const onClickRegister = (e) => {
    e.preventDefault();
    const { category, name, price, stock, description, brand, country } =
      inputs;
    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("country", country);
    formData.append("file", inputFile);

    axios
      .post("http://54.180.53.149:8080/goods", formData, {
        headers: {
          "X-AUTH-TOKEN": sessionStorage.getItem("jwtToken"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.result === "FAIL") {
          console.log(res);
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
              value={inputs.name}
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
              value={inputs.price}
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
              value={inputs.stock}
              onChange={onChange}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="description">description</label>
            <textarea
              className={styles.input}
              name="description"
              value={inputs.description}
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
              value={inputs.brand}
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
              value={inputs.country}
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
