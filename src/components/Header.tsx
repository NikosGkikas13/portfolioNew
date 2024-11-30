import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../constants";
import ThemeSwitchButton from "./ThemeSwitchButton";
import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";
import header3 from "../assets/header3.jpg";
import header4 from "../assets/header4.jpg";
const Header = ({
  showHeader,
  switchTheme,
}: {
  showHeader: boolean;
  switchTheme: () => void;
}) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: !showHeader ? "none" : "block",

        // background: `url(${header4})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        height: "10%",
        background:
          "linear-gradient(270deg, rgba(222,0,255,1) 0%, rgba(72,171,224,1) 100%)",
      }}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 3,
          maxWidth: "400px",
          alignItems: "center",
        }}
      >
        {PAGES.map((page) => (
          <MenuItem key={page.name}>
            <Link to={page.link}>
              <Typography sx={{ color: theme.palette.primary.main }}>
                {page.name}
              </Typography>
            </Link>
          </MenuItem>
        ))}
        <ThemeSwitchButton toggle={switchTheme} />
      </Box>
    </div>
  );
};

export default Header;
