import React, { useState } from 'react'
import {Button,TextField,Box,Alert} from '@mui/material'
import { NavLink, useNavigate} from 'react-router-dom'
const UserLogin = () => {
    const [error,setError] = useState({
        status:false,
        msg:'',
        type:''
    })
    const Navigate = useNavigate()
    const handelSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }
        if(actualData.email && actualData.password){
            console.log(actualData)
            setError({
                status:true,
                msg:'Login Successfully !',
                type:'success'
            })
            document.getElementById('login-form').reset()
            Navigate('/dashboard')
        }else{
            setError({
                status:true,
                msg:'All Fields Are Required',
                type:'error'
            })
        }
    }
  return (
    <>
        <Box component='form' id={'login-form'} noValidate sx={{mx:2}} onSubmit={handelSubmit}>
            <TextField required fullWidth margin='normal' id='email' name='email' label='Email Address'></TextField>
            <TextField required fullWidth margin='normal' type='password' id='password' name='password' label='Password'></TextField>
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Login</Button>
            </Box>
            <NavLink to='/reset-pass'>Forgot Password ?</NavLink>
            <Alert sx={{margin:2}} severity={error.type}>{error.msg}</Alert>
        </Box>
    </>
  )
}

export default UserLogin