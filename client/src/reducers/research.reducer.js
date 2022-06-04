import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.constants';

export default (researches = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...researches, action.payload];
        case UPDATE:
            return researches.map((research) => (research._id === action.payload._id ? action.payload : research));
        case DELETE:
            return researches.filter((research) => research._id !== action.payload);
        default:
            return researches;
    }
}; 