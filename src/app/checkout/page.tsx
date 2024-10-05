import Description from "@/components/description";
import HeaderImage from "@/components/header-image/index";
import React from "react";
import styles from "./style.module.scss";
import CalendarComponent from "@/components/calendar";
import "react-calendar/dist/Calendar.css";
import Form from "@/components/form/index";
import Faq from "@/components/faq";
import { getProductData } from "@/helpers/getData";

async function Checkout({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let product_id = searchParams?.product_id;
  let { data } =
    product_id &&
    typeof product_id === "string" &&
    (await getProductData(product_id));

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <HeaderImage imgUrl={data?.checkout_page_header_image_base64} />
        <Description
          heading={data?.checkout_page_heading}
          price={data?.price}
          discountPrice={data?.discount_price}
          description={data?.checkout_page_description}
        />
        {data?.faq && <Faq />}
        <CalendarComponent />
        <Form />
      </div>
    </>
  );
}

export default Checkout;
