import { Box, List, useTheme } from "@mui/material";
import * as React from "react";
import { SERVICES } from "../constants";
import Service from "./Service";
import { ServiceType } from "../Types";

const ServicePage = ({ showHeader }: { showHeader: () => void }) => {
  const theme = useTheme();
  React.useEffect(() => showHeader());
  const styleList = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  };

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    background: theme.palette.background.default,
  };
  return (
    <Box id="services-padding-container">
      <Box sx={boxStyle} id="services">
        <List sx={styleList}>
          {SERVICES.map((service: ServiceType) => {
            return <Service key={service.title} service={service} />;
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ServicePage;
