import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { DataGrid } from '@mui/x-data-grid';
import "./ResearchTopics.scss"
import RegistrationForm from '../../components/pop-up';
import CustomizedDialogs from '../../components/pop-up/dialog';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ResearchTopics() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
};

//Test Data
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 50,
      align: 'center',
    },
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 60 },
    { id: 6, lastName: 'Melisandre', firstName: 'Himasha', age: 20 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
//Test Data

// const TABLE_HEAD = [

//     { id: 'groupid', label: 'Group NO', alignRight: false },
//     { id: 'leaderid', label: 'Leader IT_NO', alignRight: false },
//     { id: 'leader_email', label: 'Leader Email', alignRight: false },
//     { id: 'member1', label: 'Member #1 IT_NO', alignRight: false },
//     { id: 'member2', label: 'Member #2 IT_NO', alignRight: false },
//     { id: 'member3', label: 'Member #3 IT_NO', alignRight: false },
//     { id: 'membercount', label: 'Member Count', alignRight: false },
//     { id: 'research_topic', label: 'Research Topic', alignRight: false },
//     { id: 'research_field', label: 'Research Field', alignRight: false },
//     { id: 'description', label: 'Description', alignRight: false },
// ];


function DataTable() {
    return (
        <div style={{ height: 422.5, width: '100%', backgroundColor: '#fffafa', border: '1px solid #000'}}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    );
}

    return (
        <div className="research-topic">
            <Sidebar />
            <div className="research-topic-container">
                <Navbar />
                <div className='research-topic-body'>
                    <div className='research-topic-tabs'>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Research Topics" {...a11yProps(0)} />
                                    <Tab label="Item Two" {...a11yProps(1)} />
                                    <Tab label="Item Three" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>

                                <Typography variant="h4" sx={{ mb: 4}}>
                                    Research Topics
                                    <span style={{ float: 'right', }}>
                                        <CustomizedDialogs>
                                            <RegistrationForm />
                                        </CustomizedDialogs>
                                    </span>
                                </Typography>

                                <br />

                                {DataTable()}
                                
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            
 
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}
