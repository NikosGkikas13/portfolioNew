import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Animation.css";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
type SpaceCardProps = {
  name: string;
  description?: string;
  icon?: string;
};

const SpaceCard = ({ name, description, icon }: SpaceCardProps) => {
  const theme = useTheme();
  return (
    <Box className="glow-on-hover" sx={{ height: 300 }}>
      <Card
        sx={{
          background: theme.palette.background.default,
          maxWidth: 280,
          height: 280,
          paddingTop: "20px",
          boxShadow: `0px 0px 10px 10px linear-gradient(90deg, rgba(242,46,235,0.8575805322128851) 0%, rgba(0,212,255,0.8603816526610644)`,
        }}
      >
        <CardMedia component="img" alt="green iguana" image={icon} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
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
