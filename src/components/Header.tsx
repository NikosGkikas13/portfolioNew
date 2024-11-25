import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../constants";
import ThemeSwitchButton from "./ThemeSwitchButton";

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
        background: theme.palette.mode === "dark" ? "#0f0f0f79" : "#ffffff89",
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
              <Typography>{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
        <ThemeSwitchButton toggle={switchTheme} />
      </Box>
    </div>
  );
};

export default Header;
