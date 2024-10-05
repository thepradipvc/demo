import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import FormCard from "@/components/FormCard";
import { Link, Product } from "@/types";
import { getIcons } from "@/helpers/icons";

function Template({ profile }: any) {
  const social_links = profile?.links;

  const cardClasses = {
    cardWrapper: styles.card__wrapper,
    topDiv: styles.top_div,
    imgWrap: styles.img_wrap,
    headingWrap: styles.heading_wrap,
    bottomDiv: styles.bottom_div,
    button: styles.button,
    price: styles.price,
  };

  const formClasses = {
    cardWrapper: styles.form__wrapper,
    topDiv: styles.form_top_div,
    imgWrap: styles.img_wrap,
    headingWrap: styles.heading_wrap,
    middleDiv: styles.form_middle_div,
    bottomDiv: styles.form_bottom_div,
    button: styles.button,
    price: styles.price,
  };

  return (
    <div className={styles.template__wrapper}>
      <div className={styles.user__bg}>
        <div
          id="user_bg"
          style={{
            background: `url(${profile?.profile_picture})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "blur(25px)",
            overflow: "hidden",
          }}
        ></div>
      </div>

      <div className={styles.template__content__wrapper}>
        {/* Profile picture Div */}
        <div className={styles.profile__pic__wrapper}>
          <div id="user-image">
            <Image
              src={profile?.profile_picture}
              alt=" profile"
              fill
              objectFit="cover"
            />
          </div>
        </div>

        {/* User Bio Section */}
        <div id="bio" className={styles.bio__wrapper}>
          <h1>{profile?.name}</h1>
          <p>{profile?.bio}</p>
        </div>

        <div
          id="social-links-wrapper"
          className={styles.social__links__wrapper}
        >
          {social_links?.map((link: Link) => (
            <a
              href={link?.url}
              className={styles.social__handle}
              key={link?.id}
            >
              <span>
                <Image
                  // @ts-ignore
                  src={getIcons(link?.name.toLocaleLowerCase(), "coloured")}
                  height={24}
                  width={24}
                  alt={link?.name}
                />
              </span>
              <p>{link?.name}</p>
            </a>
          ))}
        </div>

        {/* // Creator Offerings // */}
        <div className={styles.offerings_wrapper}>
          {/* Book 1:1 Call */}

          {profile?.products?.map((product: Product) => (
            <FormCard
              formClasses={formClasses}
              product={product}
              key={product?.id}
            />
          ))}

          {/* <Card classes={cardClasses} />
          <Card classes={cardClasses} />
          <FormCard formClasses={formClasses} showNumber={true} /> */}
        </div>
      </div>
    </div>
  );
}

export default Template;
