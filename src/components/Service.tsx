import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ServiceType } from "../Types";
import { Box, Icon, Typography, useTheme } from "@mui/material";

const Service = ({ service }: { service: ServiceType }) => {
  const { icon, title, subtitle } = service;

  const theme = useTheme();

  const style = {
    listItem: {
      border: "2px solid #48abe0",
      boxShadow: "0 0 20px 5px #48abe0",
      flexDirection: "column",
      maxWidth: "100%",
      padding: 0,
      borderRadius: 2,
      background: theme.palette.mode === "light" ? "#fff" : "#000000c7",
      height: "270px",
    },
    box: {
      display: "flex",
      background: "#48abe0 ",
      width: "100%",
      padding: "10px 0px",
      alignItems: "center",
    },
  };
  return (
    <ListItem sx={style.listItem}>
      <Box sx={style.box}>
        <ListItemAvatar>
          <Avatar sx={{ background: "transparent" }}>
            <Icon component={icon} sx={{ fill: theme.palette.primary.main }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          disableTypography
          primary={
            <Typography
              variant="h5"
              style={{ color: theme.palette.primary.main }}
            >
              {title}
            </Typography>
          }
        />
      </Box>

      <ListItemText
        disableTypography
        sx={{
          padding: 1,
        }}
        primary={
          <Typography
            variant="h6"
            style={{ color: theme.palette.primary.main }}
          >
            {subtitle}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Service;
