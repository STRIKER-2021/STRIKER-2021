import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';




export const Navbar = () => {
   
     
      
     
    const my_pages = [ 'home' , 'about', 'inventory','contact'];
    // const my_settings = ['Profile', 'Account','Logout'];

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenSettingsMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <div>
<AppBar position="static" style={{padding:"15px"}}>
        <Toolbar>
          <StoreIcon></StoreIcon>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 200,
                fontSize:30,
                fontFamily:'roboto',
                color:'white',
                letterSpacing: '.2rem',
                textDecoration: 'none',
              }}
            >
              Name
            </Typography>
            <Box sx={{flexWrap:'wrap',flexGrow: 1, display:'flex',justifyContent: 'center' }}>
              {my_pages.map((page) => (
                <Link key={my_pages} to={`/${page}`} style={{textDecoration:"none", margin:"0px 50px 0px 50px", }} ><Button
                  
                  sx={{ my: 2, color: 'white', display: 'block',fontSize:20 }}
                >
                  {page}
                </Button></Link>
                
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            om.tate16597@sakec.ac.in
            <br/>
            843389204
            
             
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}
