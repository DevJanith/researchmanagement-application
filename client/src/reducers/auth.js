import { authenticate, logout } from "../pages/auth/Session"

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            authenticate(action?.data) 
            return { ...state, authData: action?.data }
        case 'LOGOUT':
            logout() 
            return { ...state, authData: null }

        default:
            return state;
    }
}

export default authReducer;