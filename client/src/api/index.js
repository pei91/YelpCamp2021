import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createCampground = (newCamp) => axios.post(url, newCamp);
export const updateCampground = (id, updatedCamp) =>
  axios.patch(`${url}/${id}`, updatedCamp);
export const deleteCampground = (id) => axios.delete(`${url}/${id}`);
export const likeCampground = (id) =>
  axios.patch(`${url}/${id}/likeCampground`);
