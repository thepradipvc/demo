"use client";

import React from "react";
import { profileData } from "./ProfileData";
import Image from "next/image";
import {
  IconBell,
  IconBrandYoutube,
  IconCopy,
  IconDeviceDesktopStar,
  IconExternalLink,
  IconMailSpark,
  IconPhone,
  IconScript,
  IconUpload,
} from "@tabler/icons-react";

import Instagram from "../../assets/social-Icons/social-icon-instagram.svg";
import Facebook from "../../assets/social-Icons/social-icon-facebook.svg";
import Youtube from "../../assets/social-Icons/social-icon-youtube.svg";
import Pinterest from "../../assets/social-Icons/social-icon-pinterest.svg";
import Twitter from "../../assets/social-Icons/social-icon-twitter.svg";
import LinkedIn from "../../assets/social-Icons/social-icon-linkedin.svg";
import Snapchat from "../../assets/social-Icons/social-icon-snapchat.svg";
import Tiktok from "../../assets/social-Icons/social-icon-tiktok.svg";
import Telegram from "../../assets/social-Icons/social-icon-telegram.svg";
import Tumblr from "../../assets/social-Icons/social-icon-tumblr.svg";
import Twitch from "../../assets/social-Icons/social-icon-twitch.svg";
import Reddit from "../../assets/social-Icons/social-icon-reddit.svg";
import Discord from "../../assets/social-Icons/social-icon-discord.svg";
import Whatsapp from "../../assets/social-Icons/social-icon-whatsapp.svg";
import Spotify from "../../assets/social-Icons/social-icon-spotify.svg";
import Soundcloud from "../../assets/social-Icons/social-icon-soundcloud.svg";
import Behance from "../../assets/social-Icons/social-icon-behance.svg";
import Deviantart from "../../assets/social-Icons/social-icon-deviantart.svg";
import Fiverr from "../../assets/social-Icons/social-icon-fiver.svg";
import Github from "../../assets/social-Icons/social-icon-github.svg";
import Line from "../../assets/social-Icons/social-icon-line.svg";
import Onlyfans from "../../assets/social-Icons/social-icon-onlyfans.svg";
import Quora from "../../assets/social-Icons/social-icon-quora.svg";
import Dribble from "../../assets/social-Icons/social-icon-dribble.svg";
import Upwork from "../../assets/social-Icons/social-icon-upwork.svg";
import Custom from "../../assets/social-Icons/social-icon-custom.svg";
import Card from "@/components/Card";
import styles from "./styles.module.scss";
import FormCard from "@/components/FormCard";

function Template() {
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

        {/* Bio Link and share section */}
        {/* <div className={styles.bio_share_wrapper}>
          <div className="bg-white rounded-lg cursor-pointer p-[10px] flex items-center justify-center w-[42px]">
            <IconUpload size={22} color="#7e7e7e" />
          </div>
          <div className="bg-white rounded-lg cursor-pointer flex items-center justify-center p-[10px]  w-[75%]">
            <h5 className="text-[#111111]">{profile?.email} </h5>
            <span className="ml-2">
              <IconCopy size={22} color="#7e7e7e" />
            </span>
          </div>
          <div className="bg-white rounded-lg cursor-pointer p-[10px] flex items-center justify-center">
            <IconBell size={22} color="#7e7e7e" />
          </div>
        </div> */}

        {/* Social Links */}
        <div
          id="social-links-wrapper"
          className={styles.social__links__wrapper}
        >
          <div className={styles.social__handle}>
            <span>
              <Image src={Pinterest} height={24} width={24} alt="twitter" />
            </span>
            <p>{social_links[0]?.handle}</p>
          </div>

          <div className={styles.social__handle}>
            <span>
              <Image src={Snapchat} height={24} width={24} alt="twitter" />
            </span>
            <p>{social_links[1]?.handle}</p>
          </div>

          <div className={styles.social__handle}>
            <span>
              <Image src={Instagram} height={24} width={24} alt="twitter" />
            </span>
            <p>{social_links[2]?.handle}</p>
          </div>

          <div className={styles.social__handle}>
            <span>
              <Image src={LinkedIn} height={24} width={24} alt="twitter" />
            </span>
            <p>{social_links[3]?.handle}</p>
          </div>

          <div className={styles.social__handle}>
            <span>
              <Image src={Youtube} height={24} width={24} alt="twitter" />
            </span>
            <p>{social_links[4]?.handle}</p>
          </div>

          <div className={styles.social__handle}>
            <span>
              <Image src={Dribble} height={24} width={24} alt="twitter" />
            </span>
            <p>{social_links[5]?.handle}</p>
          </div>

          <div className={styles.social__handle}>
            <span>
              <Image src={Spotify} height={24} width={24} alt="twitter" />
            </span>
            <p>{social_links[6]?.handle}</p>
          </div>
        </div>

        {/* // Creator Offerings // */}
        <div className={styles.offerings_wrapper}>
          {/* Book 1:1 Call */}

          <Card classes={cardClasses} />
          <FormCard formClasses={formClasses}/>
          <Card classes={cardClasses} />
          <FormCard formClasses={formClasses} showNumber={true}/>
        </div>
      </div>
    </div>
  );
}

export default Template;
