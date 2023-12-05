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
    const response = await axios.post(url, JSON.stringify(payload), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

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

export const Reject = async (payload: any) => {
  console.log("DATA");
  const url = "https://marriage-portal-api.onrender.com/reject";

  try {
    const response = await axios.post(url, JSON.stringify(payload), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

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
