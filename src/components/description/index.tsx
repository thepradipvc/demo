import styles from "./styles.module.scss";

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
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default Description;
