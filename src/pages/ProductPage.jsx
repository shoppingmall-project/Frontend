import axios from "axios";
import styles from "./cssmodules/ProductsPage.module.css";

import { useState, useEffect } from "react";
import Card from "../components/Card";

function ProductPage(props) {
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(
        "http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/goods/"
      )
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch();
  }, []);

  return (
    <div className="page">
      <div className={styles.productContainer}></div>
    </div>
  );
}

export default ProductPage;
