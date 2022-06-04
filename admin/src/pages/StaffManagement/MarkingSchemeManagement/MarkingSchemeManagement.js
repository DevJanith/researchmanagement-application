import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PageLayout from '../../../components/Layout/PageLayout';
import MarkingScheme from './MarkingScheme/MarkingScheme';

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

export default function MarkingSchemeManagement() {
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
                            <Tab label="View MarkingSchema" {...a11yProps(0)} />
                            {/* <Tab label="Create Group" {...a11yProps(1)} />
                            <Tab label="Update Group" {...a11yProps(2)} /> */}
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <MarkingScheme />
                    </TabPanel>
                    {/* <TabPanel value={value} index={1}>
                        <h1>Test Tab</h1>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <h1>Test Tab</h1>
                    </TabPanel> */}
                </Box>
            </div>
        </PageLayout>
    );
}
