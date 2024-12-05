import AboutMeContainer from "./AboutMeContainer";
import purple from "../assets/purple.jpg";
import {
  Box,
  Card,
  CardActions,
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
  const style = {
    list: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      color: theme.palette.primary.main,
    },
    card: {
      border: `2px solid ${theme.palette.primary.main}`,
      height: "220px",
      width: "100%",
      borderRadius: 3,
      background: `url(${purple})`,
      backgroundPosition: "left",
    },
    cardMedia: {
      height: "50px",
      margin: "0 auto",
      padding: "5px",
      width: "auto",
      position: "relative",
      top: "35px",
    },
    cardActions: { display: "flex", justifyContent: "center" },
  };
  return (
    <AboutMeContainer title="KNOWLEDGE">
      <Box>
        <Typography variant="h5" style={{ color: theme.palette.primary.main }}>
          PROGRAMMING SKILLS
        </Typography>

        <List sx={style.list}>
          {programmingLanguages.map((item) => {
            return (
              <ListItem
                key={item.title}
                sx={{ maxWidth: window.innerWidth > 600 ? "30%" : "50%" }}
              >
                <Card className="spaceCard" sx={style.card}>
                  <CardMedia
                    component="img"
                    image={item.icon}
                    sx={style.cardMedia}
                    loading="lazy"
                  />
                  <CardActions sx={style.cardActions}>
                    <ModalComponent programmingLanguage={item.modal} />
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
