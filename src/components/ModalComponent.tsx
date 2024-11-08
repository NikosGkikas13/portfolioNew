import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, List, ListItem, useTheme } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export const ModalComponent = ({
  programmingLanguage,
}: {
  programmingLanguage: { title: string; skills: string[] };
}) => {
  const { title, skills } = programmingLanguage;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ color: theme.palette.primary.main }}
          >
            {title}
          </Typography>
          <Divider />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: theme.palette.primary.main }}
          >
            <List>
              {skills.map((skill: string) => (
                <ListItem key={skill}>{skill}</ListItem>
              ))}
            </List>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
