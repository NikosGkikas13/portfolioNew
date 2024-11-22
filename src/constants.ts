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
  { name: "Home", link: "/home" },
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
    skills: ["Rest API", "Async Fetching", "ES6"],
  },
  {
    title: "React",
    skills: [
      "Redux / Redux Toolkit",
      "Styled Components",
      "GraphQL / ApolloClient",
      "Axios",
      "Context",
    ],
  },
  { title: "Jquery", skills: ["Rest API", "Async Fetching", "AJAX"] },
  {
    title: "PHP",
    skills: ["Vanilla PHP", "Database connection", "Laravel familiarity"],
  },
  { title: "Wordpress", skills: ["Theme Development"] },
  { title: "HTML5", skills: [] },
  { title: "CSS3", skills: [] },
  {
    title: "C",
    skills: [
      "Functions",
      "Structures",
      "Pointers",
      "Trees",
      "Graphs",
      "Lists / Stacks",
    ],
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
    jobDescription: ["maintained the whole project all by  myself"],
  },
  {
    companyTitle: "Sportion",
    years: "2020 - 2022",
    jobTitle: "Junior web developer",
    jobDescription: ["maintained the whole project all by  myself"],
  },
  {
    companyTitle: "OKTO",
    years: "2022 - now",
    jobTitle: "Front end developer",
    jobDescription: ["maintained the whole project all by  myself"],
  },
];
export const isDesktop = window.innerWidth > 1024;
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
