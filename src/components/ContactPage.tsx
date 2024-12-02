import { Box, Button, Container, TextField, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MapComponent from "./MapComponent";
import services from "../assets/services.jpg";
import emailjs from "@emailjs/browser";
const ContactPage = ({ showHeader }: { showHeader: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const theme = useTheme();
  useEffect(() => showHeader());
  // const form = useRef<string | HTMLFormElement>("");
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("contact_service", "template_sdf8o28", form.current, {
        publicKey: "-fQBJ6O_sM-RKyMEG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      background: `url(${services})`,
      height: "90%",
      gap: "50px",
    },
    form: {
      width: "80%",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
    },
    input: {
      width: "45%",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "4px",
    },
    textarea: {
      width: "100%",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "4px",
    },
  };

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
    <Box sx={style.container}>
      <MapComponent />
      <form style={style.form} ref={form} onSubmit={sendEmail}>
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
            name="user_email"
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
            name="user_name"
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
          name="message"
          multiline
          rows={4}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
