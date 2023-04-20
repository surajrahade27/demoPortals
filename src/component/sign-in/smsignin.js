import React, {  useEffect, useState} from 'react'
import "./sign-in.css";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginInitiate } from '../../redux/Login/actions';
import Captcha from 'demos-react-captcha';
import { Button, Box, List, ListItem, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Typography, ButtonGroup, Collapse, Alert } from "@mui/material";

export const SMSignIn = () => {

    const [state, setState] = useState({
        username: "",
        password: "",
    });
    
    const [capcha, setCapcha] = useState(false);
    const [errors, setErrors] = useState("");
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let {user, error} = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const viewSignup = (e) =>{
        e.preventDefault();
        // navigate("/dashboard");
    }
     

    useEffect (() => {
      if(user){
        navigate("/dashboard");
      }
    },[user]);

    const handleInputChange = (v) =>{
        let {name, value} = v.target;
        setState({...state, [name]:value});
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault();
     if(capcha == false)
        setErrors("Inavalid Captch!!")
     else if(!state.username || !state.password){
        setErrors("Please enter valid username and password!!")
        console.log(errors)
     }else{
        dispatch(loginInitiate(state));
     }
    }

    const onChange= (value) =>{
        console.log(value);
        setCapcha(value);
      }

    return(
        <Box sx={{ width: 1 }}>
            {/* Sign In */}
            <Collapse in={!expanded} timeout="auto" unmountOnExit>
                <List disablePadding className="lms__Login-form">
                    <ListItem components="div" disablePadding>
                        <Typography component="h1" variant="h5" className="lms__Login-heading">
                            Sign In
                        </Typography>
                        { errors ? 
                         <Alert severity="error">{errors}</Alert>
                         :<></>
                        }
                        {/*  <Typography component="h6" className="lms__Login-subheading">
                            {errors ? (errors) :
                                <div> </div> 
                            }
                                
                         </Typography> */}
                    </ListItem>
                    <ListItem disablePadding>
                        <TextField  id='username' name='username' label='Username' placeholder='Enter username' variant="outlined" fullWidth required onChange={handleInputChange}/>
                    </ListItem>
                    <ListItem disablePadding>
                        <FormControl variant="outlined" fullWidth required>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput 
                                
                                id='password'
                                name='password'
                                label='Password' 
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                            {showPassword ? <Box className="lms__icon lms__icon-eye-off" /> : <Box className="lms__icon lms__icon-eye-on" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                onChange={handleInputChange}
                            />
                        </FormControl>
                       
                        <Box sx={{ m: 1 }} />
                         <Captcha onChange={onChange} placeholder="Enter captcha" />
                    </ListItem>
                    <ListItem disablePadding>
                        <Button type="submit" variant="contained" size="large" fullWidth="true" disableElevation onClick={handleSubmit}>Sign In</Button>
                        <Box sx={{ m: 2 }} />
                        <Button variant="text" size="large" sx={{p: 0}} onClick={viewSignup} className="noBold lms__Link-light-grey">Forgot Password?</Button>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="button" textTransform="none" className="noBold">Not a member?</Typography>
                                <div />
                                <ButtonGroup variant="text" className="lms__Login-option-links">
                                    <Button variant="text" size="large" sx={{p: 0}}>Sign Up Now</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </Collapse>
            
        </Box>
    )
}