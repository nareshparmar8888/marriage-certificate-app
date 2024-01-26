import axios from "axios";

export const loginApi = async (payload: any) => {
  try {
    const url = "https://marriage-portal-api.onrender.com/login";
    const response = await axios.post(url, JSON.stringify(payload));
    if (response && response.status) {
      switch (response?.status) {
        case 200:
          return response?.data;
        default:
          return false;
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};
