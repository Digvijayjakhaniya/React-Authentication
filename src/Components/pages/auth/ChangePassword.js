import React, { useState } from 'react'
import { Box,Button,Grid,TextField,Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
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
            password: data.get('password'),
            confirm_password: data.get('confirm_password'),
        }
        if(actualData.password){
            if(actualData.password === actualData.confirm_password){
                console.log(actualData)
            setError({
                status:true,
                msg:'Password Reset Successfully. Redirecting to Login Page....',
                type:'success'
            })
            setTimeout(()=>{
                Navigate('/log-regi')
            },3000)
            document.getElementById('change-pass-form').reset()
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
       <Grid container justifyContent='center'>
        <Grid item xs={12} sm={6}>
            <h1>Change Password</h1>
            <Box component='form' id={'change-pass-form'} noValidate sx={{}} onSubmit={handelSubmit}>
                <TextField required fullWidth margin='normal' type='password' id='password' name='password' label='New Password'></TextField>
                <TextField required fullWidth margin='normal' type='password' id='confirm_password' name='confirm_password' label='New Confirm Password'></TextField>
                
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Save</Button>
                </Box>

                <Alert sx={{margin:2}} severity={error.type}>{error.msg}</Alert>
            </Box>
        </Grid>
       </Grid>
    </>
  )
}

export default ChangePassword
