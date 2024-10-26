import { Box, MenuItem, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import { PAGES } from "../constants.ts";
import { Link } from "react-router-dom";
import HeaderBottom from "./HeaderBottom.tsx";
import avatar from "../assets/avatar.jpeg";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        background: "#ffffffe8",
        // width: "15%",
        width: "200px",
        height: "100%",
        justifyContent: "center",
        zIndex: 4,
      }}
    >
      {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
      <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 100, height: 100 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {PAGES.map((page) => (
          <MenuItem style={{ transition: "none" }} key={page.name}>
            <Link style={{ transition: "none" }} to={page.link}>
              <Typography>{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Box>
      <HeaderBottom />
    </Box>
  );
};

export default Header;
