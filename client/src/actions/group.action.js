import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.constants';

import * as api from '../api/index.js';

export const getGroups = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGroups();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createGroup = (Group) => async (dispatch) => {
    try {
        const { data } = await api.createGroup(Group);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateGroup = (id, Group) => async (dispatch) => {
    try {
        const { data } = await api.updateGroup(id, Group);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteGroup = (id) => async (dispatch) => {
    try {
        await api.deleteGroup(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};