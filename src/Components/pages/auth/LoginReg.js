import React, { useState } from 'react'
import {Box,Grid,Card,Tabs,Tab} from '@mui/material';
import login from '../../../images/login.png'
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';

const TabPanel = (props)=>{
    const {children,value,index} = props

    return <div role='tabpanel' hidden={value !== index}>
        {
            value === index && (
                <Box>{children}</Box>
            )
        }
    </div>
}

const LoginReg = () => {
    const [value,setValue] = useState(0);
    const tabHandelChange = (event, newValue)=>{
        setValue(newValue);
    }
  return (
    <>
        <Grid container sx={{height:'89.5vh'}}>
            <Grid item sm={5} lg={7} sx={{
                backgroundImage:`url(${login})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                display:{xs:'none',sm:'block'}
            }}>
            </Grid>
            <Grid item sm={7} lg={5} xs={12}>
                <Card sx={{height:'100%',width:'100%'}}>
                    <Box>
                        <Box sx={{borderBottom:1,borderColor:'divider'}}>
                            <Tabs textColor='secondary' indicatorColor='secondary' value={value} onChange={tabHandelChange} >
                                <Tab label="Login" sx={{fontWeight:'bold',textTransform:'none'}}></Tab>
                                <Tab label="Registration" sx={{fontWeight:'bold',textTransform:'none'}}></Tab>
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}><UserLogin/></TabPanel>
                        <TabPanel value={value} index={1}><UserRegistration/></TabPanel>

                    </Box>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default LoginReg