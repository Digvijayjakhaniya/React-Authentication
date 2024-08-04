import React from 'react'
import {Button,CssBaseline,Grid,Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ChangePassword from './auth/ChangePassword'
const DashBoard = () => {
    const handleLogout = ()=>{
        Navigate('/log-regi')
        console.log('Logout Clicked !')
    }
    const Navigate = useNavigate();
  return (
    <>
    <CssBaseline />
    <Grid container>
        <Grid item sm={4} sx={{height:'100vh',backgroundColor:'grey',p:5,color:'white'}}>
            <h1>Dashboard</h1>
            <Typography variant='h5'>Email: jakhaniyadigvijay02@gmail.com</Typography>
            <Typography variant='h6'>Name: Digvijay Jakhaniya</Typography>
            <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}}>LogOut</Button>
        </Grid>
        <Grid item sm={8}>
            <ChangePassword />
        </Grid>
    </Grid>
    </>
  )
}

export default DashBoard
