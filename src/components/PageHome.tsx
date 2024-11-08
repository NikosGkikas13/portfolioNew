import { Box, Typography, useTheme } from "@mui/material";
import front_background from "../assets/front_background.jpg";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  flexDirection: "column",
  position: "relative",
  top: "-60px",
  left: "10px",
};

const PageHome = () => {
  const theme = useTheme();
  return (
    <Box id="home_container">
      <Box sx={boxStyle} id="home">
        <Typography variant="h2" style={{ color: theme.palette.primary.main }}>
          NIKOS GKIKAS
        </Typography>
        <Typography variant="h5" style={{ color: theme.palette.primary.main }}>
          Front end developer
        </Typography>
        {/* <img src={front_background} alt="pc image" /> */}
      </Box>
    </Box>
  );
};

export default PageHome;
