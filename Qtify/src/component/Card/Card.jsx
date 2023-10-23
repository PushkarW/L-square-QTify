import React from "react";
import styles from "./Card.module.css";
import SongImg from "../../assets/songImg.png";

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={SongImg} alt="album" className={styles.image} />
        <div className={styles.banner}>
          <p className={styles.chip}>100M Follows</p>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>New Bollywood</p>
      </div>
    </div>
  );
};

export default Card;
