import axios from "axios";

const baseURL = "http://localhost:3000/";

export const postData = async (data) => {
  try {
    const response = await axios.post(baseURL + "tasks", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const response = await axios.get(baseURL + "tasks");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// postData(data);
getData();
// export const fetchData = async () => {
//   const { data } = await axios.get("http://localhost:3000/posts");
//   return data;
// };

// export const deleteData = (id) => {
//   axios.delete(`http://localhost:3000/posts/${id}`);
// };

// export const deleteData = async (id) => {
//   try {
//     const response = await axios.delete(`http://localhost:3000/posts/${id}`);
//     return response.data; // Return the data of the deleted post
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     throw error;
//   }
// };

// export const deleteData = async (id) => {
//   try {
//     const response = await axios.delete(`http://localhost:3000/posts/${id}`);
//     console.log(await response.data);
//     if (response.status === 200) {
//       return true; // Return true to indicate successful deletion
//     } else {
//       return false; // Return false if deletion was not successful
//     }
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     throw error;
//   }
// };
