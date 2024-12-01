import {
  Box,
  Button,
  Icon,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import astronaut from "../assets/astronaut.jpg";
import astronautMobile from "../assets/astronaut_mobile.jpeg";
import SpaceCard from "./SpaceCard";
import { isDesktop, isMobile, PAGES, SOCIALS, welcomeText } from "../constants";
import { Link } from "react-router-dom";
import ThemeSwitchButton from "./ThemeSwitchButton";

type PageHomeProps = {
  hideHeader: () => void;
  switchTheme: () => void;
};

const PageHome = ({ hideHeader, switchTheme }: PageHomeProps) => {
  hideHeader();
  const theme = useTheme();

  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          height: !isMobile ? "50%" : "50vh",
          background: `url(${!isMobile ? astronaut : astronautMobile})`,
          backgroundPosition: !isMobile ? "100% 25%" : "center",
          backgroundSize: "cover",
          paddingBottom: !isMobile ? 0 : "20px",
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: !isMobile ? "center" : "end",
            flexDirection: "column",
            height: "100%",
            width: !isMobile ? "50%" : "100%",
          }}
        >
          <Box
            id="homeInfo"
            sx={{
              width: isDesktop ? "500px" : isMobile ? "70%" : "auto",
              margin: "0 auto",
              borderRadius: "20px",
              padding: "10px",
              background: theme.palette.background.paper,
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
              {welcomeText.title}
            </Typography>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
              {welcomeText.subTitle}
            </Typography>
            <List
              sx={{
                display: "flex",
                maxWidth: "200px",
                margin: "0 auto",
                color: theme.palette.primary.main,
              }}
            >
              {SOCIALS.map((social) => (
                <ListItemButton
                  component="a"
                  href={social.link}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <social.icon />
                </ListItemButton>
              ))}
            </List>
            <ThemeSwitchButton toggle={switchTheme} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: theme.palette.background.default,
          flexDirection: !isMobile ? "row" : "column",
          gap: !isMobile ? "0px" : "30px",
          padding: isMobile ? "20px 0px" : undefined,
        }}
      >
        {PAGES.filter((page) => page.name !== "Home").map((filteredPage) => (
          <Link to={filteredPage.link} key={filteredPage.name}>
            {" "}
            <SpaceCard
              name={filteredPage.name}
              description={filteredPage.description}
              icon={filteredPage.icon}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default PageHome;
