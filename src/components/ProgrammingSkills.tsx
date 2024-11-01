import React from "react";
import AboutMeContainer from "./AboutMeContainer";
import ReactIcon from "../assets/react.png";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { ModalComponent } from "./ModalComponent";
import { programmingLanguages } from "../constants";

const ProgrammingSkills = () => {
  return (
    <AboutMeContainer title="KNOWLEDGE">
      <Box>
        <Typography variant="h5">PROGRAMMING SKILLS</Typography>
        {/* <Typography variant="h6">click on card for more info</Typography> */}
        <List
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {programmingLanguages.map((item) => {
            return (
              <ListItem
                key={item.title}
                sx={{ maxWidth: window.innerWidth > 600 ? "30%" : "50%" }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    image={ReactIcon}
                    alt="green iguana"
                    sx={{ width: "50%", margin: "0 auto", padding: "5px" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      textAlign={"center"}
                      component="div"
                      sx={{
                        fontSize:
                          window.innerWidth > 768 ? "undefined" : "1rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <ModalComponent programmingLanguage={item} />
                  </CardActions>
                </Card>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </AboutMeContainer>
  );
};

export default ProgrammingSkills;
