import { authenticate, logout } from "../pages/auth/Session"

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            console.log("came")
            // localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            authenticate(action?.data)

            return { ...state, authData: action?.data }
        case 'LOGOUT':
            // localStorage.clear()
            logout();

            return { ...state, authData: null }

        default:
            return state;
    }
}

export default authReducer;