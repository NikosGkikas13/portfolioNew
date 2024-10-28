import { Box, List } from "@mui/material";
import * as React from "react";
import { SERVICES } from "../constants";
import Service from "./Service";
import { ServiceType } from "../Types";

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
};

const ServicePage = () => {
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
