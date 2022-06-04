import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PageLayout from '../../../components/Layout/PageLayout';
import CreateDocument from './CreateDocument/CreateDocument';
import UpdateDocument from './UpdateDocument/UpdateDocument';
import ViewDocument from './ViewDocument/ViewDocument';

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

export default function DocumentManagement() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <PageLayout>
            <div className='group-management-tabs'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="View Document" {...a11yProps(0)} />
                            <Tab label="Create Document" {...a11yProps(1)} />
                            <Tab label="Update Document" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <ViewDocument />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <CreateDocument />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <UpdateDocument />
                    </TabPanel>
                </Box>
            </div>
        </PageLayout>
    );
}
