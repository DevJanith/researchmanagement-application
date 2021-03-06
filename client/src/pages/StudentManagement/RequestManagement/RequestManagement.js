import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createResearch, getResearches, updateResearch } from "../../../actions/research.action";
import PageLayout from '../../../components/Layout/PageLayout';
import CreateRequest from './CreateRequest/CreateRequest';
import UpdateRequest from './UpdateRequest/UpdateRequest';
import ViewRequest from './ViewRequest/ViewRequest';

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

export default function RequestManagement() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();
    const [researchData, setResearchData] = useState({
        researchTopic: '',
        researchField: '',
        description: '',
        supervisorDetails: null,
        groupDetails: null
    });

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        if (currentId != 0) {
            setValue(2)
        }
    }, [currentId])

    useEffect(() => {
        try {
            dispatch(getResearches());
        } catch (error) {
            console.log(error);
        }
    }, []);

    const researches = useSelector((state) => state.researchReducer);

    const researchFormData = useSelector((state) => (currentId ? state.researchReducer.find((data) => data._id === currentId) : null));

    useEffect(() => {
        if (researchFormData) {
            setResearchData(researchFormData);
        }
    }, [researchFormData]);

    // console.log(currentId)
    // console.log(ResearchData)

    const clear = () => {
        setCurrentId(0);
        setResearchData({
            researchTopic: '',
            researchField: '',
            description: '',
            supervisorName: null,
            groupDetails: null
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createResearch(researchData));
            clear();
        } else {
            dispatch(updateResearch(currentId, researchData));
            clear();
        }
    };


    return (
        <PageLayout>
            <div className='group-management-tabs'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="View Request" {...a11yProps(0)} />
                            <Tab label="Create Request" {...a11yProps(1)} />
                            <Tab label="Update Request" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <ViewRequest
                            value={value}
                            setValue={setValue}
                            researches={researches}
                            researchData={researchData}
                            setResearchData={setResearchData}
                            handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <CreateRequest
                            value={value}
                            setValue={setValue}
                            // researches={researches}
                            // researchData={researchData}
                            // setResearchData={setResearchData}
                            // handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <UpdateRequest />
                    </TabPanel>
                </Box>
            </div>
        </PageLayout>
    );
}
