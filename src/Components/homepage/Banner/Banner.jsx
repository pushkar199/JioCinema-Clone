import React from "react";
import styles from "./Banner.module.css";

function Banner({ img }) {
  return (
    <div className={styles.banner_wrapper}>
      <img src={img} alt="" />
    </div>
  );
}

export default Banner;
