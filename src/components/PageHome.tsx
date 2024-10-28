import { Box, Typography } from "@mui/material";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  flexDirection: "column",
};

const PageHome = () => {
  return (
    <Box sx={boxStyle} id="home">
      <Typography variant="h2">NIKOS GKIKAS</Typography>
      <Typography variant="h5">Front end developer</Typography>
    </Box>
  );
};

export default PageHome;
