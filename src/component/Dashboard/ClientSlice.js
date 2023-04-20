import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function ClientSlice({list}) {
  const [rows, setRows] = useState(list);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'client', headerName: 'Client Name', width: 300 },
    { field: 'license', headerName: 'License', width: 120 },
    { field: 'activeusers', headerName: 'Active Users', width: 120 },
    { field: 'curriculums', headerName: 'Curriculums', width: 120 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
      rows={rows} 
      columns={columns} 
      />
    </div>
  );
}

export default ClientSlice;