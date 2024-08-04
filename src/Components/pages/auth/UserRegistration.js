import React, { useState } from 'react'
import {Box,TextField,Button,Alert,FormControlLabel,Checkbox} from '@mui/material'
import {useNavigate } from 'react-router-dom'

const UserRegistration = () => {
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
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            confirm_password: data.get('confirm_password'),
            tc: data.get('tc')
        }
        if(actualData.name && actualData.email && actualData.password && actualData.tc !== null){
            if(actualData.password === actualData.confirm_password){
                console.log(actualData)
            setError({
                status:true,
                msg:'Login Successfully !',
                type:'success'
            })
            document.getElementById('registration-form').reset()
            Navigate('/dashboard')
            }else{
                setError({
                    status:true,
                    msg:"Password and Confirm Password doesn't match",
                    type:'error'
                })
            }
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
      <Box component='form' id={'registration-form'} noValidate sx={{mx:2}} onSubmit={handelSubmit}>
            <TextField required fullWidth margin='normal' id='name' name='name' label='Name'></TextField>
            <TextField required fullWidth margin='normal' id='email' name='email' label='Email Address'></TextField>
            <TextField required fullWidth margin='normal' type='password' id='password' name='password' label='Password'></TextField>
            <TextField required fullWidth margin='normal' type='password' id='confirm_password' name='confirm_password' label='Confirm Password'></TextField>
            <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc'/>} label='I agree to term and condition.'></FormControlLabel>
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Sign Up</Button>
            </Box>
            <Alert sx={{margin:2}} severity={error.type}>{error.msg}</Alert>
        </Box>
    </>
  )
}

export default UserRegistration
