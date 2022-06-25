import axios from "axios";
import { useState, useEffect } from "react";
import defaultImg from "../imgs/NoImg.png";

import { useParams } from "react-router";

function ProductPage() {
  const [product, setProduct] = useState({
    id: 0,
    category: "",
    name: "",
    price: 0,
    stock: 0,
    description: "",
    brand: "",
    country: "",
    imageUrl: "",
    seller: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  const { productid } = useParams();
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  useEffect(() => {
    axios
      .get(`http://54.180.53.149:8080/goods/${productid}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .then(() => {
        setUrl(
          "https://wineshoppingmall.s3.ap-northeast-2.amazonaws.com/" +
            product.imageUrl.substring(25)
        );
        setIsLoading(false);
      })
      .catch();
  }, [url]);

  return (
    !isLoading && (
      <div className="page">
        <img src={url} alt="사진" onError={handleImgError} />
        <div>제품번호:{product.id}</div>
        <div>카테고리:{product.category}</div>
        <div>제품명:{product.name}</div>
        <div>가격:{product.price}</div>
        <div>브랜드:{product.brand}</div>
        <div>원산지:{product.country}</div>
        <div>재고:{product.stock}</div>
        <div>판매자:{product.seller}</div>
        <div>{product.description}</div>
        <button>Order</button>
        <button>Add to Cart</button>
      </div>
    )
  );
}

export default ProductPage;
