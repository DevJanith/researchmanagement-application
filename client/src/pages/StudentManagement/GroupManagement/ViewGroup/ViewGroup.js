import AddIcon from '@mui/icons-material/Add';
import { Button, Divider, Grid, Paper } from "@mui/material";
import CompositeTable from './CompositeTable/CompositeTable';
import "./ViewGroup.scss";

const ViewGroup = (props) => {
    const {
        value,
        setValue,
        groups,
        groupData,
        setGroupData,
        handleSubmit,
        clear,
        currentId,
        setCurrentId
    } = props

    return (
        <>
            <CompositeTable
                value={value}
                setValue={setValue}
                groups={groups}
                groupData={groupData}
                setGroupData={setGroupData}
                handleSubmit={handleSubmit}
                clear={clear}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
        </>
    );
};

export default ViewGroup;
