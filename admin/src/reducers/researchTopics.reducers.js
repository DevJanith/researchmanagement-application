import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.constants';

export default (topics = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...topics, action.payload];
        case UPDATE:
            return topics.map((topicsData) => (topicsData.id === action.payload.id ? action.payload : topicsData));
        case DELETE:
            return topics.filter((topicsData) => topicsData.id !== action.payload);
        default:
            return topics;
    }
};