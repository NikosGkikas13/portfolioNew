import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DevicesIcon from "@mui/icons-material/Devices";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CommitIcon from "@mui/icons-material/Commit";
import ApiIcon from "@mui/icons-material/Api";
import CodeIcon from "@mui/icons-material/Code";
import { ServiceType } from "./Types";
export const PAGES = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
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
    title: " Responsive Design and Mobile Optimization",
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
