import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches({
  toggleTheme,
}: {
  toggleTheme: () => void;
}) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleTheme();
    setChecked(event.target.checked);
    console.log(checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
