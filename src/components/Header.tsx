import { Box, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../constants";

const Header = () => {
  return (
    <div>
      {" "}
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          top: "0",
          justifyContent: "center",
          left: 0,
          right: 0,
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
