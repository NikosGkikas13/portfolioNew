import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import { pages } from "../constants.ts";
import { Link } from "react-router-dom";
import HeaderBottom from "./HeaderBottom.tsx";


const Header=()=>{
  return (
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'50px',background:'#fff',width:'15%',height:'100%',justifyContent:'center'
          }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
              {pages.map((page)=><MenuItem key={page.name}><Link to={page.link}><Typography >{page.name}</Typography></Link></MenuItem>)}
            </Box>
            <HeaderBottom/>
            </Box>
  )
}

export default Header