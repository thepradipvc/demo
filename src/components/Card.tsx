import { Product } from "@/types";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

interface Props {
  classes?: {
    cardWrapper: string;
    topDiv?: string;
    imgWrap?: string;
    headingWrap?: string;
    bottomDiv?: string;
    button?: string;
    price?: string;
  };
  product: Product;
}
function Card({ classes, product }: Props) {

  console.log(product);
  

  return (
    <div className={classes?.cardWrapper}>
      <div id="top_div" className={classes?.topDiv}>
        <div id="img_wrap" className={classes?.imgWrap}>
          <Image
            src={product?.thumbnail_image_base64}
            alt={product?.thumbnail_page_heading}
            height={70}
            width={70}
          />
        </div>

        <div id="heading_wrap" className={classes?.headingWrap}>
          <h4>{product?.thumbnail_page_heading}</h4>
          <p>{product?.thumbnail_page_sub_heading}</p>
          <p id="price" className={classes?.price}>
            $999
          </p>
        </div>
      </div>
      <div id="bottom_div" className={classes?.bottomDiv}>
        <button>
          <p>{product?.thumbnail_page_button_title}</p>
          <span>
            <IconExternalLink size={22} color="#fff" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Card;
