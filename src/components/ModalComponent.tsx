import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, List, ListItem, useTheme } from "@mui/material";

export const ModalComponent = ({
  programmingLanguage,
}: {
  programmingLanguage: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: 24,
    textAlign: "center",
    background: theme.palette.background.default,
    padding: 3,
    borderRadius: 3,
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ background: "#16a9ed", color: theme.palette.primary.main }}
      >
        show more
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalBox">
          <img style={{ width: "100%" }} src={programmingLanguage} alt="" />
        </Box>
      </Modal>
    </div>
  );
};
