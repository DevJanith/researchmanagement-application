import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopics } from "../../../actions/researchTopics.actions";
import PageLayout from '../../../components/Layout/PageLayout';
import "./ResearchTopics.scss";
import TopicCreate from './TopicCreate';
import CompositeTable from './TopicList/CompositeTable';
import TopicUpdate from './TopicUpdate';

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

    //coonect the database
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(getTopics());
        } catch (error) {
            console.log(error);
        }
    }, []);

    //reducers >> index.js >> topicsReducer
    const topics = useSelector((state) => state.topicsReducer);

    // console.log(topics)

    return (
        <PageLayout>
            <div className='research-topic-tabs'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Research Topics" {...a11yProps(0)} />
                            <Tab label="Create Topic" {...a11yProps(1)} />
                            <Tab label="Update Topic" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <CompositeTable
                            topics={topics}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TopicCreate />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <TopicUpdate />
                    </TabPanel>
                </Box>
            </div>
        </PageLayout>
    );
}
