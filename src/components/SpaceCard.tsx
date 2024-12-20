import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import homeCardDark from "../assets/homeCardDark.jpg";
import homeCardLight from "../assets/homeCardLight.jpg";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { isMobile } from "../constants";
type SpaceCardProps = {
  name: string;
  description?: string;
  icon?: string;
};

const SpaceCard = ({ name, description, icon }: SpaceCardProps) => {
  const theme = useTheme();
  const style = {
    card: {
      display: isMobile ? "flex" : undefined,
      alignItems: "center",

      background: `url(${
        theme.palette.mode === "dark" ? homeCardDark : homeCardLight
      })`,
      backgroundSize: "cover",
      maxWidth: 280,
      height: !isMobile ? 280 : 160,
      padding: "10px",
      boxShadow: `0px 0px 10px 10px linear-gradient(90deg, rgba(242,46,235,0.8575805322128851) 0%, rgba(0,212,255,0.8603816526610644)`,
    },
  };
  return (
    <Box className="glow-on-hover" sx={{ height: !isMobile ? 300 : 180 }}>
      <Card sx={style.card}>
        <CardMedia component="img" loading="lazy" image={icon} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            // component="div"
            sx={{ color: theme.palette.primary.main }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.primary.main }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SpaceCard;
