import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./Materials.scss"
import Documents from './Documents';
import MarkingSchemes from './MarkingSchemes';
import PresentationTemplates from './PresentationTemplates';
import { useSelector } from 'react-redux';

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

export default function Materials() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const documents = useSelector((state) => state.documentsReducers);

    return (
        <div className="materials">
            <Sidebar />
            <div className="materials-container">
                <Navbar />
                <div className='materials-body'>
                    <div className='materials-tabs'>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Documents" {...a11yProps(0)} />
                                    <Tab label="Marking schemes" {...a11yProps(1)} />
                                    <Tab label="Presentation templates" {...a11yProps(2)} />

                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                {/* <Documents /> */}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <MarkingSchemes />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <PresentationTemplates />
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}
