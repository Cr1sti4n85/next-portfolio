import logo from "./logo.png";
import darkLogo from "./logo-dark.png";
import arrowIcon from "./arrow-icon.png";
import arrowIconDark from "./arrow-icon-dark.png";
import headerBgColor from "./header-bg-color.png";
import moonIcon from "./moon_icon.png";
import blackMenu from "./menu-black.png";
import whiteMenu from "./menu-white.png";
import blackX from "./close-black.png";
import whiteX from "./close-white.png";
import profileImg from "./profile_pic.jpg";
import handIcon from "./hand-icon.png";
import rightArrowWhite from "./right-arrow-white.png";
import downloadIcon from "./download-icon.png";
import codeIcon from "./code-icon.png";
import codeIconDark from "./code-icon-dark.png";
import eduIcon from "./edu-icon.png";
import eduIconDark from "./edu-icon-dark.png";
import projectIcon from "./project-icon.png";
import projectIconDark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import mongodb from "./mongodb.png";
import git from "./git.png";
import supabase from "./supabase.png";
import intellij from "./intellij.png";
import mysql from "./MySQL.png";
import webIcon from "./web-icon.png";
import mobileIcon from "./mobile-icon.png";
import rightArrow from "./right-arrow.png";
import sendIcon from "./send-icon.png";
import boldRightArrow from "./right-arrow-bold.png";
import mailIcon from "./mail_icon.png";
import mailIconDark from "./mail_icon_dark.png";

export const imgs = {
  logo,
  arrowIcon,
  headerBgColor,
  moonIcon,
  blackMenu,
  blackX,
  profileImg,
  handIcon,
  rightArrowWhite,
  downloadIcon,
  codeIcon,
  codeIconDark,
  eduIcon,
  eduIconDark,
  projectIcon,
  projectIconDark,
  vscode,
  mongodb,
  git,
  supabase,
  intellij,
  mysql,
  webIcon,
  mobileIcon,
  rightArrow,
  sendIcon,
  boldRightArrow,
  mailIcon,
  darkLogo,
  arrowIconDark,
  whiteMenu,
  whiteX,
  mailIconDark,
};

export const infoList = [
  {
    icon: imgs.codeIcon,
    iconDark: imgs.codeIconDark,
    title: "Lenguajes",
    description: "HTML, CSS, JavaScript, Typescript, Java",
  },
  {
    icon: imgs.eduIcon,
    iconDark: imgs.eduIconDark,
    title: "Educación",
    description: "Redes y Telecomuncaciones",
  },
  {
    icon: imgs.projectIcon,
    iconDark: imgs.projectIconDark,
    title: "Proyectos",
    description: "He desarrollado varios proyectos full-stack",
  },
];

export const servicesData = [
  {
    icon: imgs.webIcon,
    title: "Desarrollo Web",
    description:
      "Desarrollo de aplicaciones web creando interfaces atractivas y funcionales así como también un backend robusto.",
    link: "",
  },
  {
    icon: imgs.mobileIcon,
    title: "Desarrollo de aplicaciones Android",
    description:
      "Desarrollo de aplicaciones móviles para dispositivos Android que cumpan con los estándares de Google",
    link: "",
  },
];

export const toolsData = [
  imgs.vscode,
  imgs.intellij,
  imgs.supabase,
  imgs.git,
  imgs.mongodb,
  imgs.mysql,
];

export const workData = [
  {
    title: "Blog Website",
    description: " Proyecto de blog",
    bgImage: "/work-1.png",
  },
  {
    title: "Budget App",
    description: "App de presupuesto ",
    bgImage: "/work-1.png",
  },
  {
    title: "Online Burger",
    description: "App de Ecommerce",
    bgImage: "/work-1.png",
  },
  {
    title: "Inventario",
    description: "App de inventario",
    bgImage: "/work-1.png",
  },
];

export const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
