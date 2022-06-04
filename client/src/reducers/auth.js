import { authenticate, logout } from "../pages/auth/Session"
import { FETCH_ALL_ACCORDING_TO_TYPE, FETCH_ALL } from "../constants/actionTypes.constants"

const authReducer = (user = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            authenticate(action?.data)
            return { ...user, authData: action?.data }
        case 'LOGOUT':
            logout()
            return { ...user, authData: null }
        case FETCH_ALL:
            return action.payload;
        case FETCH_ALL_ACCORDING_TO_TYPE:
            return action.payload; 
        default:
            return user;
    }
}

export default authReducer;