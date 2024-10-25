import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ServiceType } from "../Types";
import { Icon } from "@mui/material";
import Divider from "@mui/material/Divider";

const Service = ({ service }: { service: ServiceType }) => {
  const { icon, title, subtitle } = service;
  console.log(icon);
  // console.log(AccountBalanceIcon);

  const listItemStyle = {
    flexDirection: "column",
    maxWidth: "30%",
    border: "1px solid red",
    padding: "16px",
  };
  const dividerStyle = {
    background: "red",
    margin: "20px 0px",
  };
  return (
    <ListItem sx={listItemStyle}>
      <ListItemAvatar>
        <Avatar>
          <Icon component={icon} />
        </Avatar>
      </ListItemAvatar>
      <Divider sx={dividerStyle} flexItem variant="fullWidth" />
      <ListItemText primary={title} secondary={subtitle} />
    </ListItem>
  );
};

export default Service;
