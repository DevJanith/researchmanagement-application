
import { FETCH_ALL } from '../constants/actionTypes.constants';

const authReducer = (state = { authData: null, users: [] }, action) => {
    switch (action.type) {
        case 'AUTH':
            console.log("came")
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))

            return { ...state, authData: action?.data }
        case 'LOGOUT':
            localStorage.clear()

            return { ...state, authData: null }
        case FETCH_ALL:
            return { ...state, authData: null, users: action.payload }

        case 'ADDLOCALSTORAGE':
            console.log("came")
            localStorage.setItem('cartData', JSON.stringify({ ...action?.data }))

            return state
        default:
            return state;
    }
}

export default authReducer;