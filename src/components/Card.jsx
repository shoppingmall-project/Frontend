import { Link } from "react-router-dom";
import styles from "./cssmodules/Card.module.css";
import defaultImg from "../imgs/NoImg.png";

function Card(props) {
  const { product } = props;
  const { id, name, price } = product;

  const onErrorImg = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.img_container}>
        <img
          className={styles.img}
          src={
            "https://wineshoppingmall.s3.ap-northeast-2.amazonaws.com/" +
            product.imageUrl.substring(25)
          }
          alt={name}
          onError={onErrorImg}
        />
      </div>
      <div className={styles.product_descriptions}>
        <Link to={"./" + id}>
          <div className={styles.product_name}>{name}</div>
        </Link>

        <div className={styles.product_price}>{price}</div>
        <Link to={"./" + id + "/order"}>
          <button>Order</button>
        </Link>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
