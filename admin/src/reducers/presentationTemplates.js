import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.constants';

export default (presentationTemplates = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return presentationTemplates.map((presentationTemplate) => (presentationTemplate._id === action.payload._id ? action.payload : presentationTemplate));
    case CREATE:
      return [...presentationTemplates, action.payload];
    case UPDATE:
      return presentationTemplates.map((presentationTemplate) => (presentationTemplate._id === action.payload._id ? action.payload : presentationTemplate));
    case DELETE:
      return presentationTemplates.filter((presentationTemplate) => presentationTemplate._id !== action.payload);
    default:
      return presentationTemplates;
  }
};