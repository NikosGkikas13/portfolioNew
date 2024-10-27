import { MenuItem, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import { isDesktop, PAGES } from "../constants.ts";
import { Link } from "react-router-dom";
import HeaderBottom from "./HeaderBottom.tsx";
import avatar from "../assets/avatar.jpeg";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const Header = () => {
  const DesktopNavbar = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        background: "#ffffffe8",
        // width: "15%",
        width: "200px",
        height: "100%",
        justifyContent: "space-evenly",
        zIndex: 4,
      }}
    >
      <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 100, height: 100 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {PAGES.map((page) => (
          <MenuItem key={page.name}>
            <Link to={page.link}>
              <Typography>{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Box>
      <HeaderBottom />
    </Box>
  );

  const MobileNavbar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    const DrawerList = (
      <Box
        sx={{
          width: 150,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
                    <Typography>{page.name}</Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />

          <HeaderBottom />
        </Box>
      </Box>
    );

    return (
      <div>
        <Button
          onClick={toggleDrawer(true)}
          sx={{ position: "fixed", top: 0, left: 0 }}
        >
          Open drawer
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  };
  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
  // return <MobileNavbar />;
};

export default Header;
