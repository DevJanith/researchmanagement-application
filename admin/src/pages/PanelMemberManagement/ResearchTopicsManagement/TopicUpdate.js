import {
    Card, Container, Stack, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
// import Scrollbar from '../../';
import TopicUpdateForm from "./Form/TopicUpdateForm"


const ContentStyle = styled('div')(({ theme }) => ({
    margin: '5vh 0',
    display: 'flex',
    flexDirection: 'column',
}));


const TopicUpdate = (props) => {
    const {
        topics,
        topicData,
        setTopicData,
        handleSubmit,
        clear,
        currentId,
        setCurrentId,
        value,
        setValue
    } = props;

    return (
        <>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Update Topic Details
                    </Typography>
                </Stack>
                <Card>
                    {/* <Scrollbar> */}
                    <Container maxWidth="md">
                        <ContentStyle>
                            <Typography sx={{ color: 'text.secondary', mb: 5, fontSize: '15px' }}>** If relevant, State if you are interested in this Research topic</Typography>
                            <TopicUpdateForm
                                topics={topics}
                                topicData={topicData}
                                setTopicData={setTopicData}
                                handleSubmitForm={handleSubmit}
                                clear={clear}
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                                value={value}
                                setValue={setValue}
                            />
                        </ContentStyle>
                    </Container>
                    {/* </Scrollbar> */}
                </Card>
            </Container>
        </>
    )
}

export default TopicUpdate