import axios from "axios";

export const UserCount = async (payload: any) => {
  const url = "https://marriage-portal-api.onrender.com/usersCounts";
  try {
    const response = await axios.post(url, payload);

    if (response && response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const userDetail = async (payload: any) => {
  const url = "https://marriage-portal-api.onrender.com/listUsers";

  try {
    const response = await axios.post(url, payload);

    if (response && response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const Approve = async (payload: any) => {
  const url = "https://marriage-portal-api.onrender.com/approve";

  try {
    const response = await axios.post(url, payload);

    if (response && response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
