import AboutMeContainer from "./AboutMeContainer";
import ambient from "../assets/ambient.jpg";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { ModalComponent } from "./ModalComponent";
import { programmingLanguages } from "../constants";

const ProgrammingSkills = () => {
  const theme = useTheme();
  return (
    <AboutMeContainer title="KNOWLEDGE">
      <Box>
        <Typography variant="h5" style={{ color: theme.palette.primary.main }}>
          PROGRAMMING SKILLS
        </Typography>

        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            color: theme.palette.primary.main,
          }}
        >
          {programmingLanguages.map((item) => {
            return (
              <ListItem
                key={item.title}
                sx={{ maxWidth: window.innerWidth > 600 ? "30%" : "50%" }}
              >
                <Card
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    height: "220px",
                    width: "100%",
                    borderRadius: 3,
                    background: `url(${ambient})`,
                    backgroundPosition: "left",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.icon}
                    sx={{
                      height: "50px",
                      margin: "0 auto",
                      padding: "5px",
                      width: "auto",
                      position: "relative",
                      top: "35px",
                    }}
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
                        color: theme.palette.primary.main,
                        padding: 1,
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
