import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type SpaceCardProps = {
  name: string;
  description?: string;
  icon?: string;
};

const SpaceCard = ({ name, description, icon }: SpaceCardProps) => {
  console.log(icon);
  return (
    <Card sx={{ maxWidth: 280, height: 300, paddingTop: "20px" }}>
      <CardMedia component="img" alt="green iguana" image={icon} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpaceCard;
