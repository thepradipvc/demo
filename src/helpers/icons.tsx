import Instagram from "../assets/social-Icons/social-icon-instagram.svg";
import Facebook from "../assets/social-Icons/social-icon-facebook.svg";
import Youtube from "../assets/social-Icons/social-icon-youtube.svg";
import Pinterest from "../assets/social-Icons/social-icon-pinterest.svg";
import Twitter from "../assets/social-Icons/social-icon-twitter.svg";
import LinkedIn from "../assets/social-Icons/social-icon-linkedin.svg";
import Snapchat from "../assets/social-Icons/social-icon-snapchat.svg";
import Tiktok from "../assets/social-Icons/social-icon-tiktok.svg";
import Telegram from "../assets/social-Icons/social-icon-telegram.svg";
import Tumblr from "../assets/social-Icons/social-icon-tumblr.svg";
import Twitch from "../assets/social-Icons/social-icon-twitch.svg";
import Reddit from "../assets/social-Icons/social-icon-reddit.svg";
import Discord from "../assets/social-Icons/social-icon-discord.svg";
import Whatsapp from "../assets/social-Icons/social-icon-whatsapp.svg";
import Spotify from "../assets/social-Icons/social-icon-spotify.svg";
import Soundcloud from "../assets/social-Icons/social-icon-soundcloud.svg";
import Behance from "../assets/social-Icons/social-icon-behance.svg";
import Deviantart from "../assets/social-Icons/social-icon-deviantart.svg";
import Fiverr from "../assets/social-Icons/social-icon-fiver.svg";
import Github from "../assets/social-Icons/social-icon-github.svg";
import Line from "../assets/social-Icons/social-icon-line.svg";
import Onlyfans from "../assets/social-Icons/social-icon-onlyfans.svg";
import Quora from "../assets/social-Icons/social-icon-quora.svg";
import Dribble from "../assets/social-Icons/social-icon-dribble.svg";
import Upwork from "../assets/social-Icons/social-icon-upwork.svg";
import Custom from "../assets/social-Icons/social-icon-custom.svg";

import {
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandSnapchat,
  IconBrandFacebook,
  IconBrandX,
  IconBrandSpotify,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandTelegram,
  IconBrandTumblr,
  IconBrandTwitch,
  IconBrandReddit,
  IconBrandDiscord,
  IconBrandWhatsapp,
  IconBrandSoundcloud,
  IconBrandBehance,
  IconBrandDeviantart,
  IconBrandFiverr,
  IconBrandGithub,
  IconBrandLine,
  IconBrandOnlyfans,
  IconLink,
  IconBrandUpwork,
} from "@tabler/icons-react";

export const ICONS = {
  instagram: { coloured: Instagram, lined: <IconBrandInstagram /> },
  facebook: { coloured: Facebook, lined: <IconBrandFacebook /> },
  youtube: { coloured: Youtube, lined: <IconBrandYoutube /> },
  pinterest: { coloured: Pinterest, lined: <IconBrandPinterest /> },
  twitter: { coloured: Twitter, lined: <IconBrandX /> },
  linkedin: { coloured: LinkedIn, lined: <IconBrandLinkedin /> },
  snapchat: { coloured: Snapchat, lined: <IconBrandSnapchat /> },
  tiktok: { coloured: Tiktok, lined: <IconBrandTiktok /> },
  telegram: { coloured: Telegram, lined: <IconBrandTelegram /> },
  tumblr: { coloured: Tumblr, lined: <IconBrandTumblr /> },
  twitch: { coloured: Twitch, lined: <IconBrandTwitch /> },
  reddit: { coloured: Reddit, lined: <IconBrandReddit /> },
  discord: { coloured: Discord, lined: <IconBrandDiscord /> },
  whatsapp: { coloured: Whatsapp, lined: <IconBrandWhatsapp /> },
  spotify: { coloured: Spotify, lined: <IconBrandSpotify /> },
  soundcloud: { coloured: Soundcloud, lined: <IconBrandSoundcloud /> },
  behance: { coloured: Behance, lined: <IconBrandBehance /> },
  deviantart: { coloured: Deviantart, lined: <IconBrandDeviantart /> },
  fiverr: { coloured: Fiverr, lined: <IconBrandFiverr /> },
  github: { coloured: Github, lined: <IconBrandGithub /> },
  line: { coloured: Line, lined: <IconBrandLine /> },
  onlyfans: { coloured: Onlyfans, lined: <IconBrandOnlyfans /> },
  quora: { coloured: Quora, lined: <IconLink /> },
  dribble: { coloured: Dribble, lined: <IconBrandDribbble /> },
  upwork: { coloured: Upwork, lined: <IconBrandUpwork /> },
  custom: { coloured: Custom, lined: <IconLink /> }, // Custom icon, assuming only one variant
};

type IconName = keyof typeof ICONS;
export const getIcons = (iconName: IconName, variant: "coloured" | "lined") => {
  return ICONS[iconName][variant];
};
