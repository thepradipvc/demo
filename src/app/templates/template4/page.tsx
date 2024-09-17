import React from "react";
import styles from "./styles.module.scss";
import { profileData } from "../../templates/template1/ProfileData";
import {
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandSnapchat,
  IconBrandSpotify,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Card from "@/components/Card";
import FormCard from "@/components/FormCard";

function TemplateFour() {
  const { profile } = profileData;

  const social_links = profile?.social_links;

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
      <div className={styles.template__content__wrapper}>
        {/* Profile picture Div */}
        <div className={styles.profile__pic__wrapper}>
          <div id="user-image">
            <Image
              src={profile?.profile_picture_two}
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
          <div className={styles.social__handle}>
            <span>
              <IconBrandPinterest />
            </span>
          </div>

          <div className={styles.social__handle}>
            <span>
              <IconBrandSnapchat />
            </span>
          </div>

          <div className={styles.social__handle}>
            <span>
              <IconBrandInstagram />
            </span>
          </div>
          <div className={styles.social__handle}>
            <span>
              <IconBrandSnapchat />
            </span>
          </div>

          <div className={styles.social__handle}>
            <span>
              <IconBrandInstagram />
            </span>
          </div>

          <div className={styles.social__handle}>
            <span>
              <IconBrandLinkedin />
            </span>
          </div>

          <div className={styles.social__handle}>
            <span>
              <IconBrandYoutube />
            </span>
          </div>

          <div className={styles.social__handle}>
            <span>
              <IconBrandDribbble />
            </span>
          </div>

          <div className={styles.social__handle}>
            <span>
              <IconBrandSpotify />
            </span>
          </div>
        </div>

        {/* // Creator Offerings // */}
        <div className={styles.offerings_wrapper}>
          {/* Book 1:1 Call */}

          <Card classes={cardClasses} />
          <FormCard formClasses={formClasses} />
          <Card classes={cardClasses} />
          <FormCard formClasses={formClasses} showNumber={true} />
        </div>
      </div>
    </div>
  );
}

export default TemplateFour;
