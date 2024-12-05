import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DevicesIcon from "@mui/icons-material/Devices";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CommitIcon from "@mui/icons-material/Commit";
import ApiIcon from "@mui/icons-material/Api";
import CodeIcon from "@mui/icons-material/Code";
import { ServiceType } from "./Types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import planet1 from "./assets/planet1.png";
import planet2 from "./assets/planet2.png";
import planet3 from "./assets/planet3.png";
import react from "./assets/react.png";
import js from "./assets/js.webp";
import wp from "./assets/wordpress.png";
import jquery from "./assets/jquyry.webp";
import php from "./assets/php.png";
import html5 from "./assets/html5.png";
import css3 from "./assets/css3.png";
import c from "./assets/c.png";
import javascriptModal from "./assets/skills/javascript.png";
import reactModal from "./assets/skills/react.png";
import phpModal from "./assets/skills/php.png";
import wordpressModal from "./assets/skills/wordpress.png";
import htmlModal from "./assets/skills/html.png";
import cssModal from "./assets/skills/css.png";
import jQueryModal from "./assets/skills/jQuery.png";
import cModal from "./assets/skills/c.png";

export const welcomeText = {
  title: "NIKOS GKIKAS",
  subTitle: "Front end developer",
};
export const PAGES: {
  name: string;
  link: string;
  description?: string;
  icon?: string;
}[] = [
  { name: "Home", link: "/" },
  {
    name: "Services",
    link: "/services",
    description:
      "From front-end design to seamless functionality, I bring ideas to life with precision and creativity.",
    icon: planet1,
  },
  {
    name: "About",
    link: "/about",
    description:
      "Passionate front-end developer with a love for crafting visually appealing and functional digital experiences.",
    icon: planet2,
  },
  {
    name: "Contact",
    link: "/contact",
    description:
      "Let’s collaborate to build something amazing! Feel free to reach out for project inquiries, partnerships, or just to say hello.",
    icon: planet3,
  },
];
export const SERVICES: ServiceType[] = [
  {
    icon: LaptopMacIcon,
    title: "Custom Website Development",
    subtitle:
      "Building tailored websites from scratch using modern technologies like HTML, CSS, and JavaScript libraries (React, JQuery).",
  },
  {
    icon: DevicesIcon,
    title: " Responsive Design ",
    subtitle:
      "Creating websites that provide an optimal viewing experience across a variety of devices and screen sizes.",
  },
  {
    icon: JavascriptIcon,
    title: "Single Page Applications (SPAs)",
    subtitle:
      "Developing dynamic and interactive single-page applications using frameworks like React",
  },
  {
    icon: CodeIcon,
    title: "Performance Optimization",
    subtitle:
      "Enhancing website performance through various techniques such as code splitting, lazy loading, and image optimization.",
  },
  {
    icon: ApiIcon,
    title: "API Integration",
    subtitle:
      "Connecting frontend applications to backend services or third-party APIs to fetch and display data.",
  },
  {
    icon: CommitIcon,
    title: "Version Control and Collaboration",
    subtitle:
      "Using version control systems to manage code changes and collaborate with other developers.",
  },
];
export const programmingLanguages = [
  {
    title: "Javascript",
    icon: js,
    modal: javascriptModal,
  },
  {
    title: "React",
    icon: react,
    modal: reactModal,
  },
  {
    title: "Jquery",
    icon: jquery,
    modal: jQueryModal,
  },
  {
    title: "PHP",
    icon: php,
    modal: phpModal,
  },
  {
    title: "Wordpress",
    icon: wp,
    modal: wordpressModal,
  },
  { title: "HTML5", icon: html5, modal: htmlModal },
  { title: "CSS3", icon: css3, modal: cssModal },
  {
    title: "C",
    icon: c,
    modal: cModal,
  },
];
export const aboutMeData = {
  name: "Nikos Gkikas",
  city: "Marathon, Greece",
  mobile: "+30 6984764168",
  email: "ngkdev93@gmail.com",
  age: "31",
  whoAmI:
    "I’m Nikos Gkikas, a front-end web developer based in Athens, Greece. I have a Bachelor degree in Informatics Engineering. I find beauty in writting clean,thorough and well-structrured code for websites. My goal is to get better with each day.",
};
export const historyData = [
  {
    companyTitle: "Freelance",
    years: "2019 - 2020",
    jobTitle: "Junior web developer",
    jobDescription: [
      "Created some freelance projects while making my first steps in the programming world.",
    ],
  },
  {
    companyTitle: "Sportion",
    years: "2020 - 2022",
    jobTitle: "Junior web developer",
    jobDescription: [
      "Implemented/ revamped/ maintained various landing pages from scratch to completion.",
    ],
  },
  {
    companyTitle: "OKTO",
    years: "2022 - now",
    jobTitle: "Front end developer",
    jobDescription: ["maintained the whole project all by  myself"],
  },
];
export const isDesktop = window.innerWidth > 1024;
export const isMobile = window.innerWidth < 600;
export const SOCIALS = [
  {
    link: "https://www.linkedin.com/in/nikos-gkikas-7b250b1b0",
    icon: LinkedInIcon,
  },
  {
    link: "https://github.com/NikosGkikas13",
    icon: GitHubIcon,
  },
  {
    link: "https://www.instagram.com/nick_klg",
    icon: InstagramIcon,
  },
];
