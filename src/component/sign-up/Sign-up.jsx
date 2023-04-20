import React from "react";
//import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "../sign-in/sign-in.css";
import { Button, Box, List, ListItem, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Typography, Select, MenuItem } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

export const SignUp = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //const navigate = useNavigate();

    /* const viewSignup = (e) =>{
        e.preventDefault();
        navigate("/dashboard");
    } */

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [gender, setGender] = React.useState('');

    const dataGender = (event) => {
        setGender(event.target.value);
    };

    const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    const states = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];

    return(
        <Box sx={{ width: 1 }} className="lms__SignUp-form">
            <List disablePadding className="lms__Login-form">
                <ListItem components="div" disablePadding>
                    <Typography component="h1" variant="h5" className="lms__Login-heading">
                        Sign Up
                    </Typography>
                    <Typography component="h6" className="lms__Login-subheading">
                        Learn from top universities and businesses
                    </Typography>
                </ListItem>
                <ListItem disablePadding>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField label='Unique ID' placeholder='Enter Unique ID' variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={dataGender}
                            >
                                <MenuItem>Male</MenuItem>
                                <MenuItem>Female</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='First Name' placeholder='Enter first name' variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Last Name' placeholder='Enter last name' variant="outlined" required />
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    label="Birth Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    label="Joining Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}>
                            <TextField label='Username (Email)' placeholder='Enter email' variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel>Password</InputLabel>
                                <OutlinedInput 
                                    label='Password' 
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {showPassword ? <Box className="lms__icon lms__icon-eye-off" /> : <Box className="lms__icon lms__icon-eye-on" />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel>Confirm</InputLabel>
                                <OutlinedInput 
                                    label='Password' 
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {showPassword ? <Box className="lms__icon lms__icon-eye-off" /> : <Box className="lms__icon lms__icon-eye-on" />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}>
                            <TextField label='Alternate Email' placeholder='Enter email' variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Phone' placeholder='Enter phone' variant="outlined" type="number" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Mobile' placeholder='Enter phone' variant="outlined" type="number" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label='Address' placeholder='Enter address' variant="outlined" multiline rows={3} required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                disablePortal
                                options={countries}
                                renderInput={(params) => <TextField {...params} label="Country" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                disablePortal
                                options={states}
                                renderInput={(params) => <TextField {...params} label="State" />}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <TextField label='City' placeholder='Enter city' variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField label='Zip' placeholder='Enter zip' variant="outlined" type="number" required fullWidth />
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={6}>
                            <TextField label='Grade' placeholder='Enter grade' variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Designation' placeholder='Enter designation' variant="outlined" required fullWidth />
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem disablePadding>
                    <Button type="submit" variant="contained" size="large" fullWidth="true" disableElevation>Sign In</Button>
                </ListItem>
                <ListItem disablePadding>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Typography variant="button" textTransform="none">Already a member?</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="text" size="large">Sign In Now</Button>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </Box>
    )
}