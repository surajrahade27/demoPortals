import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { creatClient } from '../../redux/Client/actions';
import { toast } from 'react-toastify';
import Breadcrum from '../BreadCrum/breadcrum';
import { 
    Stack,
     Button, 
     Box, 
    TextField, 
    Grid, 
    Card,
    CardContent,
    CardHeader,
} from "@mui/material";


function AddClient() {
  const [client, setClient] = useState({
    name: "",
    mgrfirstname: "",
    mgrlastname: "",
    login: "",
    password: "",
    mgremail: "",
    phone: "",
    lrnbaseurl: "",
    smtpserver: "",
    smtpuser: "",
   smtppassword: "",
    portnumber: "",
    emailId: "",
    emaildisplayname: "",
    replyemail: "",
   sessiontimeout: "",
   status: "",
   ldateformat: "",
   clientkey: "",
   appkey: "",
   gydeserver: "",
   domainname: "",
});


const dispatch = useDispatch();
const navigate = useNavigate();
const [error, setError] = useState("");
const [saving, setSaving] = useState(false);

const handleInputChange = (v) =>{
  let {name, value} = v.target;
  setClient({...client, [name]:value});
}

  const handleSaveClient = () => {
    
    setSaving(true);
    dispatch(creatClient(client));
    navigate("/dashboard");
  }

 return (
    <div>
    <Box height={80} />    
    <Box sx={{ flexGrow: 1 }} backgroundColor="#EFF2F3">
    <Breadcrum name="Create Client" />
    <Card style={{maxWidth:850, margin:"0 auto", padding:"20px 10px"}}>
      <CardHeader title="Create New Client" >
        
      </CardHeader>
        <CardContent>
       
         <form onSubmit={handleSaveClient}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8} >
                <TextField
                 size="small" 
                 id='name' 
                 name='name' 
                 label='Client Name' 
                 placeholder='Enter New Client Name' 
                 variant="outlined" 
                 fullWidth required 
                 onChange={handleInputChange}
                 />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField size="small" 
                id='domainname' 
                name='domainname' 
                label='Subdomain' 
                placeholder='Subdomain' 
                variant="outlined" 
                fullWidth   
                onChange={handleInputChange}
                />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField 
                size="small" 
                id='lrnbaseurl' 
                name='lrnbaseurl' 
                label='User Login Page'
                 placeholder='User Login Page' 
                 variant="outlined"  
                 fullWidth 
                 required 
                 onChange={handleInputChange}
                 />
                </Grid>
                
                <Grid item xs={12} sm={8}>
                <Stack spacing={2} direction="row">
                <TextField 
                size="small"
                 id='clientkey'
                 name='clientkey'
                 label='Client Key'
                 placeholder='Client Key' 
                 variant="outlined" 
                 fullWidth  
                 onChange={handleInputChange}
                 />
                <TextField size="small" 
                id='appkey' 
                name='appkey' 
                label='Public Key' 
                placeholder='Public Key' 
                variant="outlined"  
                fullWidth 
                onChange={handleInputChange}
                />
                </Stack>
                </Grid>

                {/*Admin Information */}
                <Grid item xs={12} >
                    <h4>Admin Information :</h4>
                    <h5>Set up a default User who will have complete access to portal</h5>
                    {/* <CardHeader title="Admin Information" subheader="Set up a default User who will have complete access to portal" /> */}
                </Grid>
                <Grid item xs={12} sm={8}>
                <Stack spacing={2} direction="row">
                <TextField size="small" 
                id='mgrfirstname' 
                name='mgrfirstname' 
                label='First Name' 
                placeholder='First Name' 
                variant="outlined"  
                required 
                onChange={handleInputChange}
                />
                <TextField size="small" 
                id='mgrlastname' 
                name='mgrlastname' 
                label='Last Name' 
                placeholder='Last Name' 
                variant="outlined"   
                onChange={handleInputChange}
                />
                <TextField size="small" 
                id='phone' 
                name='phone' 
                label='Phone' 
                placeholder='Phone' 
                variant="outlined"   
                onChange={handleInputChange}/>
                 </Stack>
                </Grid>
                <Grid item xs={12} sm={8}>
                <Stack spacing={2} direction="row">
                <TextField 
                size="small" 
                id='login' 
                name='login' 
                label='User Name' 
                placeholder='User Name' 
                variant="outlined" 
                fullWidth required 
                onChange={handleInputChange}
                />
                <TextField size="small" 
                type="password" 
                id='password'
                name='password' 
                label='Password' 
                placeholder='Password' 
                variant="outlined" 
                fullWidth  
                required 
                onChange={handleInputChange}
                />
                </Stack>
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField 
                size="small" 
                id='mgremail' 
                name='mgremail' 
                label='Enter Email'
                 placeholder='Enter Email' 
                 variant="outlined"  
                 fullWidth 
                 required 
                 onChange={handleInputChange}
                 />
                </Grid>
                {/*SMTP Information */}
                <Grid item xs={12} >
                    <h4>SMTP Settings :</h4>
                    <h5>Set up SMTP server and manage Email notifications</h5>
                    {/* <CardHeader title="SMTP Settings" subheader="Set up SMTP server and manage Email notifications" /> */}
                </Grid>
                <Grid item xs={12} sm={8}>
                <Stack spacing={2} direction="row">
                <TextField 
                size="small" 
                id='emailId' 
                name='emailId' 
                label='System Email ' 
                placeholder='System Email ' 
                variant="outlined" 
                fullWidth required 
                onChange={handleInputChange}
                />
                <TextField 
                size="small" 
                id='emaildisplayname' 
                name='emaildisplayname' 
                label='Display Name' 
                placeholder='Display Name' 
                variant="outlined" 
                fullWidth required   
                onChange={handleInputChange}/>
                 </Stack>
                </Grid>
                <Grid item xs={12} sm={8} >
                <TextField 
                size="small" 
                id='replyemail' 
                name='replyemail' 
                label='Reply To Email' 
                placeholder='Reply To Email' 
                variant="outlined" 
                fullWidth 
                required  
                onChange={handleInputChange}
                />

                </Grid>
                <Grid item xs={12} sm={8}>
                <Stack spacing={2} direction="row">
                <TextField 
                size="small" 
                id='host' 
                name='host' 
                label='Host' 
                placeholder='Host ' 
                variant="outlined" 
                fullWidth 
                required 
                onChange={handleInputChange}
                />
                <TextField 
                size="small" 
                id='port' 
                name='port' 
                label='Port' 
                placeholder='Port' 
                variant="outlined"  
                required   
                onChange={handleInputChange}
                />
                   </Stack>
                </Grid>
                <Grid item xs={12} sm={8} >
                <TextField 
                size="small" 
                id='ausername' 
                name='ausername' 
                label='Authentication Username' 
                placeholder='Authentication Username' 
                variant="outlined" 
                fullWidth 
                required  
                onChange={handleInputChange}
                />
                </Grid><Grid item xs={12} sm={8} >
                <TextField 
                size="small" 
                type="password" 
                id='apassword' 
                name='apassword' 
                label='Password' 
                placeholder='Password' 
                variant="outlined" 
                fullWidth 
                required  
                onChange={handleInputChange}
                />
                </Grid>
                <Grid item xs={12} sm={5}> 
                <Button 
                type="Submit" 
                color="primary" 
                variant='contained'  
                fullWidth 
                disabled={saving}
                >
                  {saving? "Saving....": "Save"}
                  </Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
     </Card>
    </Box>    
  </div>
  )
}

export default AddClient
