import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPresentationTemp = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPresentationTemp();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPresentationTemp = (presentationTemp) => async (dispatch) => {
  try {
    const { data } = await api.createPresentationTemp(presentationTemp);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePresentationTemp = (id, presentationTemp) => async (dispatch) => {
  try {
    const { data } = await api.updatePresentationTemp(id, presentationTemp);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePresentationTemp = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePresentationTemp(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePresentationTemp = (id) => async (dispatch) => {
  try {
    await api.deletePresentationTemp(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
