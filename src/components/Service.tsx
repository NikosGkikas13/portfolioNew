import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ServiceType } from "../Types";
import { Icon, Typography, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";

const Service = ({ service }: { service: ServiceType }) => {
  const { icon, title, subtitle } = service;
  console.log(icon);
  const theme = useTheme();

  const listItemStyle = {
    flexDirection: "column",
    maxWidth: "30%",
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "16px",
  };
  const dividerStyle = {
    background: theme.palette.primary.main,
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
      <ListItemText
        disableTypography
        primary={
          <Typography
            variant="h6"
            style={{ color: theme.palette.primary.main }}
          >
            {title}
          </Typography>
        }
        secondary={subtitle}
        sx={{ color: theme.palette.primary.main }}
      />
    </ListItem>
  );
};

export default Service;
