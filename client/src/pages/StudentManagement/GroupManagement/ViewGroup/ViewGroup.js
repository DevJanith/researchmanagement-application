import AddIcon from '@mui/icons-material/Add';
import { Button, Divider, Grid, Paper } from "@mui/material";
import CompositeTable from './CompositeTable/CompositeTable';
import "./ViewGroup.scss";

const ViewGroup = (props) => {
    const {
        value,
        setValue,
        groups
    } = props

    return (
        <>
            <CompositeTable
                value={value}
                setValue={setValue}
                groups={groups}
            />
        </>
    );
};

export default ViewGroup;
