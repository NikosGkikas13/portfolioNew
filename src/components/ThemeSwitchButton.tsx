import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useTheme } from "@emotion/react";

const ThemeSwitchButton = ({ toggle }: { toggle: () => void }) => {
  const theme = useTheme();
  const SwitchIcon = () => {
    if (theme.palette.mode === "dark")
      return <WbSunnyIcon sx={{ fill: "#fef500" }} />;
    if (theme.palette.mode === "light") return <BedtimeIcon />;
  };
  return <Box onClick={toggle}>{SwitchIcon()}</Box>;
};

export default ThemeSwitchButton;
