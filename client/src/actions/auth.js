import { Navigate } from 'react-router-dom';
import * as api from '../api';
import { FETCH_ALL, FETCH_ALL_ACCORDING_TO_TYPE } from '../constants/actionTypes.constants';
import React, { useState } from 'react';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        //log in user...
        const { data } = await api.signIn(formData);

        dispatch({ type: 'AUTH', data })

        navigate('/student-management')
    } catch (error) {
        console.log(error.message)
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        //log up user...
        const { data } = await api.signUp(formData);

        dispatch({ type: 'AUTH', data })

        navigate('/student-management')
    } catch (error) {
        console.log(error.message)
    }
}

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const getUserAccordingToType = (dataType) => async (dispatch) => {  
    try {   
        const { data } = await api.fetchUserAccordingToType(dataType);

        dispatch({ type: FETCH_ALL_ACCORDING_TO_TYPE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};