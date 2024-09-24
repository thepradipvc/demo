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

function TemplateThree() {
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

  const colors = [
    "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(6,182,212,1) 41%)", 
    "linear-gradient(90deg, rgba(236,72,153,1) 0%, rgba(168,85,247,1) 41%)", 
    "linear-gradient(90deg, rgba(52,211,153,1) 0%, rgba(16,185,129,1) 41%)",
    "linear-gradient(90deg, rgba(96,165,250,1) 0%, rgba(59,130,246,1) 41%)",
    "linear-gradient(90deg, rgba(249,115,22,1) 0%, rgba(234,88,12,1) 41%)",
    "linear-gradient(90deg, rgba(251,191,36,1) 0%, rgba(245,158,11,1) 41%)",
    "linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(139,92,246,1) 41%)"

  ];

  let availableColors = [...colors];

  function getRandomColor() {
    // If all colors are used, reset the available colors
    if (availableColors.length === 0) {
      availableColors = [...colors];
    }

    // Get a random index from the available colors
    const randomIndex = Math.floor(Math.random() * availableColors.length);

    // Select the color at that index
    const selectedColor = availableColors[randomIndex];

    // Remove the selected color from the available pool
    availableColors.splice(randomIndex, 1);

    // Return the selected color
    return selectedColor;
  }

  return (
    <div className={styles.template__wrapper}>
      <div className={styles.template__content__wrapper}>
        <div className={styles.profile_parent}>
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

          <div
            style={{
              background: getRandomColor(),
            }}
          >
            <Card classes={cardClasses} />
          </div>
          <div
            style={{
              background: getRandomColor(),
            }}
          >
            <FormCard formClasses={formClasses} />
          </div>
          <div
            style={{
              background: getRandomColor(),
            }}
          >
            <Card classes={cardClasses} />
          </div>
          <div
            style={{
              background: getRandomColor(),
            }}
          >
            <FormCard formClasses={formClasses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateThree;
