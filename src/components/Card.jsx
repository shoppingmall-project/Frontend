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
          src={defaultImg}
          alt={name}
          onError={onErrorImg}
        />
      </div>
      <div className={styles.product_descriptions}>
        <Link to={"./" + id}>
          <div className={styles.product_name}>{name}</div>
        </Link>

        <div className={styles.product_price}>{price}</div>
      </div>
    </div>
  );
}

export default Card;
