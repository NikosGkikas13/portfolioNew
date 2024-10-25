import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export default function HeaderBottom() {
  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{ display: "flex", gap: "5px", background: "transparent" }}
      >
        <Link
          to={"https://www.linkedin.com/in/nikos-gkikas-7b250b1b0/"}
          style={{ background: "transparent" }}
        >
          {" "}
          <LinkedInIcon />
        </Link>
        <Link
          to={"https://github.com/NikosGkikas13"}
          style={{ background: "transparent" }}
        >
          {" "}
          <GitHubIcon />
        </Link>
        <Link
          to={"https://www.instagram.com/nick_klg/"}
          style={{ background: "transparent" }}
        >
          <InstagramIcon />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
