import * as React from "react";
import Switch from "@mui/material/Switch";
import { useTheme } from "@emotion/react";

export const ControlledSwitches = ({
  toggleTheme,
}: {
  toggleTheme: () => void;
}) => {
  const theme = useTheme();

  return (
    <Switch
      checked={theme.palette.mode === "light" ? true : false}
      onChange={toggleTheme}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default ControlledSwitches;
