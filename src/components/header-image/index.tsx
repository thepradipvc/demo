import React from "react";
import Image from "next/image";
import styles from './styles.module.scss'

function HeaderImage() {
  let URL =
    "https://assets.stanwith.me/live/msc/38008/56unl/lumencreativeco6.jpg/webp/0x433/100/lumencreativeco6.webp?width=500";
  return (
    <div className={styles.header_image}>
      <Image src={URL} alt="HeaderImage" fill />
    </div>
  );
}

export default HeaderImage;
