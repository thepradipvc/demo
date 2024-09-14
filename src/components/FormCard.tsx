import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

interface Props {
  formClasses: {
    cardWrapper: string;
    topDiv: string;
    imgWrap: string;
    headingWrap: string;
    middleDiv: string;
    bottomDiv: string;
    button: string;
    price: string;
  };

  showNumber?: boolean;
}

function FormCard({ formClasses, showNumber }: Props) {
  return (
    <div className={formClasses.cardWrapper}>
      <div className={formClasses.topDiv}>
        <div id="img_wrap" className={formClasses?.imgWrap}>
          <Image
            src="https://assets.stanwith.me/live/msc/38008/16f8n/3.png/webp/433x433/100/3.webp"
            alt="card_img"
            height={70}
            width={70}
          />
        </div>

        <div id="heading_wrap" className={formClasses?.headingWrap}>
          <h4>Elevate & Create Online Workshop</h4>
          <p>Build your business and brand online!</p>
          <p id="price" className={formClasses?.price}>
            $999
          </p>
        </div>
      </div>

      <div className={formClasses.middleDiv}>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        {showNumber && <input type="text" placeholder="Enter your number" />}
      </div>

      <div className={formClasses.bottomDiv}>
        <button>
          <p>Watch Workshop</p>
          <span>
            <IconExternalLink size={22} color="#fff" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default FormCard;
