import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTopics, updateTopics } from "../../../actions/researchTopics.actions";
import PageLayout from '../../../components/Layout/PageLayout';
import "./ResearchTopics.scss";
import CompositeTable from './TopicList/CompositeTable';
import TopicUpdate from "./TopicUpdate"

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

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();
    const [topicData, setTopicData] = useState({
        groupid: "",
        leaderid: "",
        leader_email: "",
        member1: "",
        member2: "",
        member3: "",
        membercount: "",
        research_topic: "",
        research_field: "",
        description: "",
        statu: ""
    });

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        if (currentId != 0) {
            setValue(1)
        }
    }, [currentId])

    useEffect(() => {
        try {
            dispatch(getTopics());
        } catch (error) {
            console.log(error);
        }
    }, [value]);

    //reducers >> index.js >> topicsReducer
    const topics = useSelector((state) => state.topicsReducer);;

    const topicFormData = useSelector((state) => (currentId ? state.topicsReducer.find((data) => data._id === currentId) : null));

    console.log("topic Form Data")
    console.log(topicFormData)

    useEffect(() => {
        if (topicFormData) {
            setTopicData(topicFormData);
        }
    }, [topicFormData]);

    // console.log(currentId)
    // console.log(itemData)

    const clear = () => {
        setCurrentId(0);
        setTopicData({
            groupid: "",
            leaderid: "",
            leader_email: "",
            member1: "",
            member2: "",
            member3: "",
            membercount: "",
            research_topic: "",
            research_field: "",
            description: "",
            statu: ""
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            // dispatch(createItem(itemData));
            console.log("create function triggered")
            clear();
        } else {
            dispatch(updateTopics(currentId, topicData));
            clear();
        }
    };




    // console.log(topics)

    return (
        <PageLayout>
            <div className='research-topic-tabs'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Research Topics" {...a11yProps(0)} />
                            <Tab label="Update Topic" {...a11yProps(1)} />
                            {/* <Tab label="Update Topic" {...a11yProps(2)} /> */}
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <CompositeTable
                            topics={topics}
                            topicData={topicData}
                            setTopicData={setTopicData}
                            handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            value={value}
                            setValue={setValue}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TopicUpdate
                            topicData={topicData}
                            setTopicData={setTopicData}
                            handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            value={value}
                            setValue={setValue}

                        />
                    </TabPanel>
                    {/* <TabPanel value={value} index={1}>
                        <TopicUpdate
                            topicData={topicData}
                            setTopicData={setTopicData}
                            handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            value={value}
                            setValue={setValue} 
                        />
                    </TabPanel> */}
                    {/* <TabPanel value={value} index={2}>
                        <TopicUpdate
                            topics={topics}
                        // clear={clear}
                        // currentId={currentId}
                        // setCurrentId={setCurrentId}
                        // setValue={setValue}
                        // notify={notify}
                        />
                    </TabPanel> */}
                </Box>
            </div>
        </PageLayout>
    );
}
