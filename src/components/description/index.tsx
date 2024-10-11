import React from "react";
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";

interface DescriptionProps {
  description: string;
  heading: string;
  price: string;
  discountPrice: string;
}

function Description({
  heading,
  discountPrice,
  price,
  description,
}: DescriptionProps) {
  return (
    <div className={styles.description_wrapper}>
      <h1>{heading}</h1>
      <h4>$999 </h4>
      <div className={styles.description_content}>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Description;
