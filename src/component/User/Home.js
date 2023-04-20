import '../../App.css'
import * as React from 'react';
import TableBody from '@mui/material/TableBody'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, loadUsers } from '../../redux/User/actions';
import { useNavigate } from 'react-router-dom'




function Home() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector(state => state.users);
    const { user } = useSelector((state) => state.auth);

    React.useEffect(() =>{
        dispatch(loadUsers());
    },[])

    const handleDelete = (id) =>{
        if(window.confirm('Do you really want to delete User?')){
            dispatch(deleteUsers(id));
        }
      }

  return (
    <div>
      <h2>Learner Page</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 5 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell><Button variant='contained' color='primary' onClick={() => navigate("/addUser")}>+Add New User</Button>
        </TableCell>

        </TableRow>
        </TableHead>
      </Table>
      </TableContainer>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Lastname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Designation</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        {<TableBody>
          {users && users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.firstname}
              </TableCell>
              <TableCell align="center">{user.lastname}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.designation}</TableCell>
              
              <TableCell align="center">
              <ButtonGroup variant="contained" aria-label="outlined button group">
                <Button color="primary" style={{marginRight: "10px"}} onClick={() => navigate('/editUser/'+user.id)}>Edit</Button>
                <Button color="secondary" onClick={() => handleDelete(user.id)}>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> }
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home





