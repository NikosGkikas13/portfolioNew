import { Box, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MapComponent from "./MapComponent";
import services from "../assets/services.jpg";
import emailjs from "@emailjs/browser";
import BasicPopover from "./PopOver";
import { isDesktop } from "../constants";
const ContactPage = ({ showHeader }: { showHeader: () => void }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [popOverText, setPopOverText] = useState("");
  useEffect(() => showHeader());

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("contact_service", "template_sdf8o28", form.current, {
        publicKey: "-fQBJ6O_sM-RKyMEG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setPopOverText("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setPopOverText("Message failed");
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
      height: isDesktop ? "90%" : "100%",
      gap: "50px",
      marginTop: isDesktop ? "85px" : "0px",
    },
    form: {
      width: "100%",
      maxWidth: "984px",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      background: "#48abe0",
      padding: "20px",
      borderRadius: "8px",
    },
    input: {
      width: "45%",
      borderRadius: "4px",
    },
    textarea: {
      width: "100%",
      borderRadius: "4px",
    },
  };

  const nameValidation = (text: string) => {
    if (/[^a-zA-Z_ ]/.test(text)) {
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
    <Box sx={style.container} id="contactPageContainer">
      <MapComponent />
      <form
        style={{ ...style.form, flexWrap: "wrap" }}
        ref={form}
        onSubmit={sendEmail}
        id="contactForm"
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
            name="user_email"
            required
            helperText={emailError ? "Please enter a valid email" : ""}
            onBlur={(e) => emailValidation(e.target.value)}
            autoComplete="new-username"
            slotProps={{
              input: {
                autoComplete: "new-email", // Use a non-standard autocomplete value
              },
            }}
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
            slotProps={{
              input: {
                autoComplete: "off", // Disable autocomplete
              },
            }}
          />
        </Box>
        <TextField
          sx={style.textarea}
          id="messageInput"
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4}
          required
        />

        <BasicPopover popOverText={popOverText} />
      </form>
    </Box>
  );
};

export default ContactPage;
