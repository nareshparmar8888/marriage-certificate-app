import axios from "axios";

export const loginApi = async (payload: any) => {
  try {
    const url = "http://192.168.1.44/login";
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
