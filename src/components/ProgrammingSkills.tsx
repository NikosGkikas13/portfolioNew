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

const programmingLanguages = [
  {
    title: "Javascript",
    skills: ["Rest API", "Async Fetching", "ES6"],
  },
  {
    title: "React",
    skills: [
      "Redux / Redux Toolkit",
      "Styled Components",
      "GraphQL / ApolloClient",
      "Axios",
      "Context",
    ],
  },
  { title: "Jquery", skills: ["Rest API", "Async Fetching", "AJAX"] },
  {
    title: "PHP",
    skills: ["Vanilla PHP", "Database connection", "Laravel familiarity"],
  },
  { title: "Wordpress", skills: ["Theme Development"] },
  { title: "HTML5", skills: [] },
  { title: "CSS3", skills: [] },
  {
    title: "C",
    skills: [
      "Functions",
      "Structures",
      "Pointers",
      "Trees",
      "Graphs",
      "Lists / Stacks",
    ],
  },
];

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
              <ListItem key={item.title} sx={{ maxWidth: "30%" }}>
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
                    >
                      {item.title}
                    </Typography>
                    {/* <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        <List>
                          {item.skills.map((skill) => {
                            return <ListItem key={skill}>{skill}</ListItem>;
                          })}
                        </List>
                      </Typography> */}
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <ModalComponent programmingLanguage={item} />
                  </CardActions>
                </Card>
                {/* <List>
                  {item.skills.map((skill) => {
                    return <h1>{skill}</h1>;
                  })}
                </List> */}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </AboutMeContainer>
  );
};

export default ProgrammingSkills;
