import styles from "./cssmodules/Card.module.css";
import defaultImg from "../imgs/NoImg.png";

function Card(props) {
  const { product } = props;
  const { category, name, price, brand, country, imgUrl, description } =
    product;

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
        <div className={styles.product_name}>{name}</div>
        <div className={styles.product_price}>{price}</div>
        <div className={styles.product_description}>{description}</div>
        <div className={styles.product_brand}>{brand}</div>
        <div className={styles.product_country}>{country}</div>
        <div className={styles.product_category}>{category}</div>
      </div>
    </div>
  );
}

export default Card;
