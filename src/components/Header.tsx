import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../constants";

const Header = ({ showHeader }: { showHeader: boolean }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: !showHeader ? "none" : "block",
      }}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          // position: "fixed",
          // top: "0",
          justifyContent: "center",
          // left: 0,
          // right: 0,
          padding: 3,
          background: theme.palette.mode === "dark" ? "#0f0f0f79" : "#ffffff89",
        }}
      >
        {PAGES.map((page) => (
          <MenuItem key={page.name}>
            <Link to={page.link}>
              <Typography>{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Box>
    </div>
  );
};

export default Header;
