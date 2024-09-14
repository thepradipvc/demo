import React from "react";
import styles from "./styles.module.scss";
import { profileData } from "../template1/ProfileData";
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
    // "#698bf1", //Blue
    "#f07754", //Orange
    "#FF89BB", //Pink
    "#8094FF", //Light Blue
    "#FFBD12", //Yellow
    "#00C6AE", //Green
    "#61E4C5", //Turquoise (Light green)
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
              backgroundColor: getRandomColor(),
            }}
          >
            <Card classes={cardClasses} />
          </div>
          <div
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <FormCard formClasses={formClasses} />
          </div>
          <div
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <Card classes={cardClasses} />
          </div>
          <div
            style={{
              backgroundColor: getRandomColor(),
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
