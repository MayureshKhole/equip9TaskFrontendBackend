import axios from "axios";
const API_URI = process.env.EXPO_PUBLIC_API_URL;

export const uploadFile = async (data) => {
  console.log("data from apii", data);
  try {
    const response = await axios.post(`${API_URI}/upload`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("data from apii", data);
    console.log("Error while calling the API ", error.message);
  }
};
