import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionDesktop:{
      display:"none",
      [theme.breakpoints.up("md")]:{
          display:"flex",

      }
  }
  ,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function Navbar() {
const [Mobilemenu,setMobilemenu]=useState(null);
    const classes = useStyles();
    const isMenuOpen=Boolean(Mobilemenu)
const openMobileMenu=(e)=>{
    setMobilemenu(e.currentTarget);
}
const closeMobileMenu=()=>{
    setMobilemenu(null);

}

    const mobileMenu=(
        <Menu anchorEl={Mobilemenu} id="mobile-menu" keepMounted open={isMenuOpen}>

            <MenuItem onClick={closeMobileMenu}>
home
            </MenuItem>
        
            <MenuItem onClick={closeMobileMenu}>
about 
            </MenuItem><MenuItem onClick={closeMobileMenu}>
other
            </MenuItem>
            </Menu>

    )
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
         <Box className={classes.sectionDesktop}>
         <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">News</Button>
         </Box>
         <IconButton color="inherit" onClick={openMobileMenu}>
             <ExpandMoreIcon/>
         </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </div>
  );
 }
 export default Navbar;