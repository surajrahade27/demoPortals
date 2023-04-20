import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography, Container } from "@mui/material";
import { SMSignIn } from "../../component/sign-in/smsignin"
//import { SignUp } from "../../components/sign-up/Sign-up";
import './login.css';
import logo from '../../assets/walmart-logo.png'

export default function Login() {
    return(
        <Box sx={{ flexGrow: 1 }} className="lms__Login">
            <Grid container component="main" className="lms__Login-sections">
                <Grid item xs={12} md={6} className="lms__Login-figure">
                    <Typography component="h1">
                        Think<br />Outside<br />The Box.
                    </Typography>
                </Grid>
                <Grid item xs={11} md={6} className="lms__Login-data">
                    <Container maxWidth="xs" className="lms__Login-contents">
                        <Box className="lms__Login-logo"><img src={logo} alt="LMS" /></Box>
                        {/* Login */}
                        <SMSignIn />
                        <div className="lms_Login-footer-spacer"></div>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}