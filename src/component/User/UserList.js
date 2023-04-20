import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, loadUsers } from '../../redux/User/actions';
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Edit = ({ index }) => {
    const handleEditClick = () => {
    }
    return <div></div>
};

const Delete = (id) =>{
    let dispatch = useDispatch();
    const handleDelete = (id) =>{
        if(window.confirm('Do you really want to delete User?')){
            dispatch(deleteUsers(id));
        }
      }
    return <div> 
         <Button onClick={handleDelete} >
            <DeleteIcon />
         </Button>
         </div>
}
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstname', headerName: 'First name', width: 150, editable: true,},
    { field: 'lastname', headerName: 'Last name', width: 150, editable: true,}, 
    { field: 'email', headerName: 'Email', width: 160, editable: true, },
    { field: 'department', headerName: 'Department', width: 160, editable: true,},
    { field: 'designation', headerName: 'Designation', width: 160, editable: true,},
    { field: 'accountType', headerName: 'Account Type', width: 160, editable: true,},
    { field: 'clientId', headerName: 'Client ID', width: 110, editable: true,},
    { field: 'actions', headerName: 'Actions',
        renderCell: (params)=>{
            return (
                <div>
                    <Delete id={params.row.id}/>
                </div>
            );
        }},
    // { field: 'actions', headerName: 'Actions',
    // renderCell: (params) => {
    //     return (
    //         <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
    //             <Edit index={params.row.id} />
    //          </div>
    //     );
    //  }},

];
      
export default function UserList() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector(state => state.users);
    const { user } = useSelector((state) => state.auth);
    const [tableData, setTableData] = React.useState([]);

React.useEffect(() =>{
    dispatch(loadUsers());
    setTableData(users);
},[])

  return (
    <div>
    <h2>Learner Page</h2>
    <Box sx={{ height: 400, width: '100%' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 5 }} aria-label="simple table">
      <TableHead><TableRow><TableCell>
        <Button variant='contained' color='primary' onClick={() => navigate("/addUser")}>+Add New User</Button>
        </TableCell> </TableRow></TableHead></Table>
      </TableContainer>
     <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      
    </Box>
    </div>
  );
}