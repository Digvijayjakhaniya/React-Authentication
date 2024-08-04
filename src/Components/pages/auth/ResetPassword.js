import React, { useState } from 'react'
import {Grid,TextField,Box,Button,Alert} from '@mui/material'
const ResetPassword = () => {
    const [error,setError] = useState({
        status:false,
        msg:'',
        type:''
    })
    const handelSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email')
        }
        if(actualData.email){
            console.log(actualData)
            setError({
                status:true,
                msg:'Password Reset Email Send. Check Your Email !!',
                type:'success'
            })
            document.getElementById('reset-pass-form').reset()
        }else{
            setError({
                status:true,
                msg:'Please Provide Valid Email !',
                type:'error'
            })
        }
    }
  return (
    <>
       <Grid container justifyContent='center'>
        <Grid item xs={12} sm={6}>
            <h1>Reset Password</h1>
            <Box component='form' id={'reset-pass-form'} noValidate sx={{}} onSubmit={handelSubmit}>
                <TextField required fullWidth margin='normal' id='email' name='email' label='Email Address'></TextField>
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Send</Button>
                </Box>

                <Alert sx={{margin:2}} severity={error.type}>{error.msg}</Alert>
            </Box>
        </Grid>
       </Grid>
    </>
  )
}

export default ResetPassword
