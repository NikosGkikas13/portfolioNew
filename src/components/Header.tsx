import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isDesktop, PAGES } from "../constants";
import ThemeSwitchButton from "./ThemeSwitchButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import avatar from "../assets/avatar.jpeg";
const Header = ({
  showHeader,
  switchTheme,
}: {
  showHeader: boolean;
  switchTheme: () => void;
}) => {
  const theme = useTheme();
  const DesktopNavbar = () => {
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
  const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
    const drawerButton = open ? <CloseIcon /> : <MenuIcon />;

    const DrawerList = (
      <Box
        sx={{
          width: 150,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(180deg, rgba(222,0,255,1) 0%, rgba(72,171,224,1) 100%)",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: "100%",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ width: 70, height: 70 }}
          />
          <List>
            {PAGES.map((page) => (
              <ListItem key={page.name} disablePadding>
                <ListItemButton>
                  <Link to={page.link}>
                    <Typography
                      sx={{ color: theme.palette.primary.contrastText }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <ThemeSwitchButton toggle={switchTheme} />
          <Divider />
        </Box>
      </Box>
    );

    return (
      <div style={{ display: !showHeader ? "none" : "block" }}>
        <div
          style={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 1201,
            // color: "white",
          }}
          onClick={() => setOpen(!open)}
        >
          {drawerButton}
        </div>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  };

  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Header;
