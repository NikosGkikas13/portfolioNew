import { Box, List } from "@mui/material";
import * as React from "react";
import { isDesktop, isMobile, SERVICES } from "../constants";
import Service from "./Service";
import { ServiceType } from "../Types";
import services from "../assets/services.jpg";
const ServicePage = ({ showHeader }: { showHeader: () => void }) => {
  React.useEffect(() => showHeader());

  const style = {
    containerBox: {
      background: `url(${services})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop: isDesktop ? "85px" : "0px",
    },
    list: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "center",
      flexDirection: "column",
      maxWidth: "400px",
    },
    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "90%",
      padding: 5,
      flexDirection: !isMobile ? "row" : "column",
    },
  };
  return (
    <Box id="services-padding-container" sx={style.containerBox}>
      <Box sx={style.box} id="services">
        <List sx={style.list}>
          {SERVICES.map((service: ServiceType, index) => {
            return index % 2 ? (
              <Service key={service.title} service={service} />
            ) : null;
          })}
        </List>
        <List sx={{ ...style.list, alignItems: "end" }}>
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
