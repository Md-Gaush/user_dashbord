import axios from "axios";
export const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
