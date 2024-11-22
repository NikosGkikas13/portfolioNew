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
    gap: "40px",
    justifyContent: "center",
    flexDirection: "column",
  };

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    background: theme.palette.background.default,
    padding: 3,
  };
  return (
    <Box id="services-padding-container">
      <Box sx={boxStyle} id="services">
        <List sx={styleList}>
          {SERVICES.map((service: ServiceType, index) => {
            return index % 2 ? (
              <Service key={service.title} service={service} />
            ) : null;
          })}
        </List>
        <List sx={{ ...styleList, alignItems: "end" }}>
          {SERVICES.map((service: ServiceType, index) => {
            return index % 2 ? null : (
              <Service key={service.title} service={service} />
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ServicePage;
