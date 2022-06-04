import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.constants';

import * as api from '../api/index.js';

export const getResearches = () => async (dispatch) => {
    try {
        const { data } = await api.fetchResearches();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createResearch = (Research) => async (dispatch) => {
    try {
        const { data } = await api.createResearch(Research);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateResearch = (id, Research) => async (dispatch) => {
    try {
        const { data } = await api.updateResearch(id, Research);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteResearch = (id) => async (dispatch) => {
    try {
        await api.deleteResearch(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};