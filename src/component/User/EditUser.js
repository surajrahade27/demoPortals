import { React, useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUserById } from '../../redux/User/actions';

const EditUser = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [error, setError] = useState("");
    let dispatch = useDispatch();
    let {id} = useParams();
    //let {user} = useSelector((state) => state.user)
    const {name, email, contact, address} = state;
    const navigate = useNavigate();
 
    useEffect(() =>{
      console.log('Edit User ID: '+id)
      dispatch(getUserById(id))
    }, [])
    
    // useEffect(() =>{
    //   if(user){
    //     setState({...user})
    //   }
    // }, [user])

    const handleInputChange = (v) =>{
        let {name, value} = v.target;
        setState({...state, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
     if(!name || !contact || !address || !email){
        setError("Please Enter All Required Fields!!")
        console.log(error)
     }else{
        dispatch(addUser(state));
        navigate("/");
        setError("")
     }
    }

  return (
    <div>
      <h2>Edit User Page</h2>
      <h3 style={{color: "red"}}>{error}</h3>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      
      <TextField id="name" name="name" label="Name"  type="text" value={name} onChange={handleInputChange} /> <br />
      <TextField id="email" name="email" label="Email" type="email" value={email} onChange={handleInputChange} /> <br />
      <TextField id="contact" name="contact" label="Contact" type="text" value={contact} onChange={handleInputChange} /> <br />
      <TextField id="address" name="address" label="Address" type="text" value={address} onChange={handleInputChange} /> <br />
      <Button 
      variant='contained' 
      color='primary'
       type='submit'
       style={{width: "100px"}}
      >
        Submit
       </Button>
       <Button 
        variant='contained' 
        color='primary'
        type='submit'
        style={{width: "100px"}}
        onClick={() => navigate("/")}>
        Cancel
       </Button>
    </Box>
    </div>
  )
}

export default EditUser
