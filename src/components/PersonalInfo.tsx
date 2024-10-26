import React from "react";
import AboutMeContainer from "./AboutMeContainer";
import { Divider, List, ListItem, Typography } from "@mui/material";

const dividerStyle = {
  background: "red",
  margin: "20px 0px",
};

const aboutMeData = {
  name: "Nikos Gkikas",
  city: "Marathon, Greece",
  age: "31",
  email: "ngkdev93@gmail.com",
  mobile: "+30 6984764168",
};

const PersonalInfo = () => {
  return (
    <AboutMeContainer title="ABOUT ME">
      <Typography variant="h5">
        I’m Nikos Gkikas, a front-end web developer based in Athens, Greece. I
        have a Bachelor degree in Informatics Engineering. I find beauty in
        writting clean,thorough and well-structrured code for websites. My goal
        is to get better with each day.
      </Typography>
      <Divider sx={dividerStyle} flexItem variant="fullWidth" />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          height: "180px",
        }}
      >
        {Object.entries(aboutMeData).map((item) => {
          return (
            <ListItem
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
              key={item[0]}
            >
              <Typography variant="h6">{item[0]}: </Typography>
              <Typography variant="h6">{item[1]}</Typography>
            </ListItem>
          );
        })}
      </List>
    </AboutMeContainer>
  );
};

export default PersonalInfo;
