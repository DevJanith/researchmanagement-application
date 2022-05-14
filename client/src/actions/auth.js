import { Navigate } from 'react-router-dom';
import * as api from '../api';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        //log in user...
        const { data } = await api.signIn(formData);

        dispatch({ type: 'AUTH', data })

        navigate('/')
    } catch (error) {
        console.log(error.message)
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        //log up user...
        const { data } = await api.signUp(formData);

        dispatch({ type: 'AUTH', data })

        navigate('/')
    } catch (error) {
        console.log(error.message)
    }
}
