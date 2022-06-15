import axios from "axios";
import styles from "./cssmodules/ProductsPage.module.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Card from "../components/Card";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://54.180.53.149:8080/goods")
      .then((res) => {
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
      <Link to="./add">
        <button>add</button>
      </Link>
    </div>
  );
}

export default ProductsPage;
