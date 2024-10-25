import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import MapComponent from "./MapComponent";

const style = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0px",
  },
  input: {
    width: "45%",
  },
  textarea: {
    width: "100%",
  },
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const nameValidation = (text: string) => {
    if (/[^a-zA-Z]/.test(text)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const emailValidation = (text: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!text) setEmailError(false);
  };

  return (
    <Container sx={style.container}>
      <MapComponent />
      <form
        style={{
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "10%",
          }}
        >
          <TextField
            error={emailError}
            sx={style.input}
            id="emailInput"
            label="Email"
            variant="outlined"
            type="email"
            required
            helperText={emailError ? "Please enter a valid email" : ""}
            onBlur={(e) => emailValidation(e.target.value)}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={nameError}
            sx={style.input}
            id="nameInput"
            label="Name"
            variant="outlined"
            required
            helperText={nameError ? "Please enter a valid name" : ""}
            onBlur={(e) => nameValidation(e.target.value)}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <TextField
          sx={style.textarea}
          id="emailInput"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
