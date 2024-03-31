import axios from "axios";

const baseURL = "http://localhost:3000";

export const postData = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/tasks`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const response = await axios.get(`${baseURL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
