import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000"
})


export const fetchPosts = () => API.get(`/posts`);
export const createPost = (values) => API.post(`/posts`, values);
export const deletePost = (id) => API.delete(` /posts/${id}`);


export const signIn = (formData) => API.post('/user/sign-in', formData);
export const signUp = (formData) => API.post('/user/sign-up', formData);


//get all (localhost:5000/tutorials)
export const fetchTutorials = () => API.get(`/tutorial`);
//get
export const fetchTutorial = (id) => API.get(`/tutorial/${id}`)
//create
export const createTutorial = (tutorialData) => API.post(`/tutorial`, tutorialData)
//update
export const updateTutorial = (id, tutorialData) => API.patch(`/tutorial/${id}`, tutorialData)
//delete
export const deleteTutorial = (id) => API.delete(`/tutorial/${id}`)





