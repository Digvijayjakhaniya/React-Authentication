import React from 'react'
import {Box,AppBar,Toolbar,Typography,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
const Navbar = () => {
  return (
    <>
      <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='secondary'>
            <Toolbar>
                <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                    {/* Digvijay */}
                   
                    <a href="https://digvijay.rf.gd" target='_blank' rel="noreferrer"> <img src={logo} width={150} alt="digvijay logo" srcset="" /></a>
                </Typography>
                <Button component={NavLink} to="/" sx={{color:"white", textTransform:'none'}} style={({isActive})=>{return {backgroundColor: isActive ? '#6d1b7b':''}}}>Home</Button>
                <Button component={NavLink} to="/contact" sx={{color:"white", textTransform:'none'}} style={({isActive})=>{return {backgroundColor: isActive ? '#6d1b7b' : ''}}}>Contact</Button>
                <Button component={NavLink} to="/log-regi" sx={{color:"white", textTransform:'none'}} style={({isActive})=>{return {backgroundColor: isActive ? '#6d1b7b' : ''}}}>Login/Reg</Button>
            </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
