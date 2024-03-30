import axios from "axios";

export const postData = (data) => {
  axios.post("http://localhost:3000/posts", data);
};

export const fetchData = async () => {
  const { data } = await axios.get("http://localhost:3000/posts");
  return data;
};

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

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/posts/${id}`);
    console.log(await response.data);
    if (response.status === 200) {
      return true; // Return true to indicate successful deletion
    } else {
      return false; // Return false if deletion was not successful
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
