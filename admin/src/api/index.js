import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000"
})


export const fetchPresentationTemp = () => API.get(`/presentationTemplates`);
export const createPresentationTemp = (values) => API.post(`/presentationTemplates`, values);
export const deletePresentationTemp = (id) => API.delete(` /presentationTemplates/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const signIn = (formData) => API.post('/user/sign-in', formData);
export const signUp = (formData) => API.post('/user/sign-up', formData);

//API for Staff Management

//get all (localhost:5000/topic)
export const fetchTopics = () => API.get(`/topic`);
//get
export const fetchTopic = (id) => API.get(`/topic/${id}`);
//create
export const createTopics = (topicsData) => API.post(`/topic`, topicsData);
//update
export const updateTopics = (id,topicsData) => API.patch(`/topic/${id}`,topicsData);
//delete
export const deleteTopics = (id) => API.delete(`/topic/${id}`);

