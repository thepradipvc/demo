import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FormCard from "@/components/FormCard";
import BubbleBG from "../../../components/ui-bg/bubble/index";
import { Link, Product } from "@/types";
import { getIcons } from "@/helpers/icons";

function TemplateFour({ profile }: any) {
  const social_links = profile?.links;

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
    <>
      <div className={styles.template__wrapper}>
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

          {/* Social Links */}
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
                  {/* @ts-ignore */}
                  {getIcons(link?.name.toLowerCase(), "lined")}
                </span>
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
          </div>
        </div>
      </div>
      <BubbleBG />
    </>
  );
}

export default TemplateFour;
