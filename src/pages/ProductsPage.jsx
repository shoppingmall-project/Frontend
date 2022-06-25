import axios from "axios";
import styles from "./cssmodules/ProductsPage.module.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Card from "../components/Card";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isManager, setIsManager] = useState(false);
  useEffect(() => {
    axios
      .get("http://54.180.53.149:8080/goods")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch();
    if (sessionStorage.getItem("jwtToken")) {
      axios
        .get(`http://54.180.53.149:8080/auth/${sessionStorage.getItem("id")}`)
        .then((res) => {
          if (res.data.data.role === "M") setIsManager(true);
        })
        .catch();
    } else {
      setIsManager(false);
    }
    console.log(isManager);
  }, []);

  return (
    <div className="page">
      <div className={styles.productContainer}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
      {isManager && (
        <Link to="./add">
          <button>add</button>
        </Link>
      )}
    </div>
  );
}

export default ProductsPage;
