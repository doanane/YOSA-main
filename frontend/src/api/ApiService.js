import axios from './axios';

//POST requests
const createVolunteer = (data) => axios.post('volunteers/', data);
const createContactUsMesasge = (data) => axios.post('contactus/', data);

//GET requests
const fetchNews = () => axios.get('/news/');

export {createVolunteer, createContactUsMesasge, fetchNews}