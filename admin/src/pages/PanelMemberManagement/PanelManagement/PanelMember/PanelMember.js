import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Avatar,
    Button, Card, Checkbox, Container, Stack, Table, TableBody,
    TableCell, TableContainer,
    TablePagination, TableRow, Typography
} from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'PanelId', headerName: 'Panel Member ID', width: 180 },
  { field: 'worksAt', headerName: 'Company Name', width: 130 },
  { field: 'jobRole', headerName: 'Occupation', width: 130 },
  { field: 'allocatedGroups', headerName: 'Allocated Groups', width: 180 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', PanelId: '2022S1_PAM_0356', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_01','2022S1_REG_02') },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', PanelId: '2022S1_PAM_0344', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_03','2022S1_REG_04') },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', PanelId: '2022S1_PAM_0777', worksAt: 'IIT', jobRole: 'Lecturer', allocatedGroups: ('2022S1_REG_15','2022S1_REG_17') },
  { id: 4, lastName: 'Stark', firstName: 'Arya', PanelId: '2022S1_PAM_0356', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_01','2022S1_REG_02') },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', PanelId: '2022S1_PAM_0356', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_01','2022S1_REG_02') },
  { id: 6, lastName: 'Melisandre', firstName: 'Himasha', PanelId: '2022S1_PAM_0356', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_01','2022S1_REG_02')  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', PanelId: '2022S1_PAM_0356', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_01','2022S1_REG_02') },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', PanelId: '2022S1_PAM_0356', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_01','2022S1_REG_02')  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', PanelId: '2022S1_PAM_0356', worksAt: 'SLIIT', jobRole: 'Senior Lecturer', allocatedGroups: ('2022S1_REG_01','2022S1_REG_02') },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%', border: '2px solid', borderRadius: '15px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}