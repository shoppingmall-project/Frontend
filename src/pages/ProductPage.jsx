import axios from "axios";
import styles from "./cssmodules/LoginPage.module.css";
import { useState, useEffect } from "react";
import defaultImg from "../imgs/NoImg.png";

import { useParams } from "react-router";

function ProductPage() {
  const [product, setProduct] = useState({});
  const { productid } = useParams();

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  useEffect(() => {
    axios
      .get(`http://54.180.53.149:8080/goods/${productid}`)
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
        console.log(product.imageUrl);
      })
      .catch();
  }, []);

  return (
    <div className="page">
      <img
        src={require(product.imageUrl)}
        alt="사진"
        onError={handleImgError}
      />
      <div>제품번호:{product.id}</div>
      <div>카테고리:{product.category}</div>
      <div>제품명:{product.name}</div>
      <div>가격:{product.price}</div>
      <div>브랜드:{product.brand}</div>
      <div>원산지:{product.country}</div>
      <div>재고:{product.stock}</div>
      <div>{product.description}</div>
    </div>
  );
}

export default ProductPage;
