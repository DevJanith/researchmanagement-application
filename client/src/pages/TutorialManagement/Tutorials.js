import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const columns = [
  // { field: '_id', headerName: 'ID', width: 300 },
  // { field: 'index', headerName: "Index", width: 300 },
  { field: 'title', headerName: 'Title', width: 400 },
  { field: 'description', headerName: 'Description', width: 400 },
  { field: 'publishedBy', headerName: 'Published By', width: 400 }
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 65 },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function Tutorials(props) {
  const {
    tutorials
  } = props

  return (
    <>
      <Card sx={{ maxWidth: 1200 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tutorials
          </Typography>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={tutorials}
              columns={columns}
              pageSize={5}
              getRowId={(tutorials) => tutorials._id}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
