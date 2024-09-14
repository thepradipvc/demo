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
}
function Card({ classes }: Props) {

  return (
    <div className={classes?.cardWrapper}>
      <div id="top_div" className={classes?.topDiv}>
        <div id="img_wrap" className={classes?.imgWrap}>
          <Image
            src="https://assets.stanwith.me/live/msc/38008/ijw3d/lumencreativeco103%201.jpg/webp/433x433/100/lumencreativeco103%201.webp"
            alt="card_img"
            height={70}
            width={70}
          />
        </div>

        <div id="heading_wrap" className={classes?.headingWrap}>
          <h4>1:1 Coaching & Mentorship</h4>
          <p>Book a private business coaching session with me!</p>
          <p id="price" className={classes?.price}>
            $999
          </p>
        </div>
      </div>
      <div id="bottom_div" className={classes?.bottomDiv}>
        <button>
          Book Session
          <span>
            <IconExternalLink size={22} color="#111111" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Card;
