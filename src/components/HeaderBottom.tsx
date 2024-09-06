import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

export default function HeaderBottom() {

  return (
    <Box >
      <BottomNavigation
        showLabels
        sx={{display:'flex',gap:'5px'}}
      >
        <Link to={'/'}> <LinkedInIcon/></Link>
        <Link to={'/'}> <GitHubIcon/></Link>
        <Link to={'/'}><InstagramIcon/></Link>
      </BottomNavigation>
    </Box>
  );
}
