import axios from "axios";
import styles from "./cssmodules/ProductsPage.module.css";

import { useState, useEffect } from "react";
import Card from "../components/Card";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/goods"
      )
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch();
  }, []);

  return (
    <div className="page">
      <div className={styles.productContainer}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
