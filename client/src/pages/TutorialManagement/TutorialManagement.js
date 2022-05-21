import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getTutorials } from "../../actions/tutorial.actions";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import CreateTutorial from './CreateTutorial';
import "./TutorialManagement.scss";
import Tutorials from './Tutorials';
import UpdateTutorial from './UpdateTutorial';
import { useDispatch, useSelector } from "react-redux";

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

export default function TutorialManagement() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(getTutorials())
        } catch (error) {
            console.log(error)
        }
    }, [])

    const tutorials = useSelector((state) => state.tutorialReducers);


    return (
        <div className='tutorial-management'>
            <Sidebar />
            <div className='tutorial-management-container'>
                <Navbar />
                <div className='tutorial-management-body '>
                    <div className='tutorial-management-tabs'>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Tutorials" {...a11yProps(0)} />
                                    <Tab label="Create Tutorial" {...a11yProps(1)} />
                                    <Tab label="Update Tutorial" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <Tutorials tutorials={tutorials} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <CreateTutorial />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <UpdateTutorial />
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </div >
    );
}
