import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  imgUrl: string;
}

function HeaderImage({ imgUrl }: Props) {
  return (
    <div className={styles.header_image}>
      <Image src={imgUrl} alt="HeaderImage" fill />
    </div>
  );
}

export default HeaderImage;
