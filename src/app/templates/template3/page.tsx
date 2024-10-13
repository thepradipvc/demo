import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FormCard from "@/components/FormCard";
import { Link, Product } from "@/types";
import { getIcons } from "@/helpers/icons";

function TemplateThree({ profile }: any) {
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
        {/* <div className={styles.offerings_wrapper}>

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
        </div> */}

        <div className={styles.offerings_wrapper}>
          {/* Book 1:1 Call */}

          {profile?.products?.map((product: Product) => (
            <div
              style={{
                backgroundColor: getRandomColor(),
              }}
            >
              <FormCard
                formClasses={formClasses}
                product={product}
                key={product?.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateThree;
