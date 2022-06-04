import { authenticate, logout } from "../pages/auth/Session"
import { FETCH_ALL_ACCORDING_TO_TYPE, FETCH_ALL } from "../constants/actionTypes.constants"

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            authenticate(action?.data)
            return { ...state, authData: action?.data }
        case 'LOGOUT':
            logout()
            return { ...state, authData: null }
        case FETCH_ALL:
            return action.payload;
        case FETCH_ALL_ACCORDING_TO_TYPE:
            return action.payload; 
        default:
            return state;
    }
}

export default authReducer;