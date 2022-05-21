import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000"
})


export const fetchPosts = () => API.get(`/posts`);
export const createPost = (values) => API.post(`/posts`, values);
export const deletePost = (id) => API.delete(` /posts/${id}`);


export const signIn = (formData) => API.post('/user/sign-in', formData);
export const signUp = (formData) => API.post('/user/sign-up', formData);


