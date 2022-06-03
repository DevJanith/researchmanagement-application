import * as api from '../api';

import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.constants';

export const getTopics = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTopics();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createTopics = (topicsData) => async (dispatch) => {
    try {
        const { data } = await api.createTopics(topicsData);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTopics = (id,topicsData) => async (dispatch) => {
    try {
        const { data } = await api.updateTopics(id,topicsData);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}


export const deleteTopics = (id) => async (dispatch) => {
    try {
        await api.deleteTopics(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}