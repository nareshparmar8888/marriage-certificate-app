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
  const url = "http://localhost:3000/listUsers";

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

export const registration = async (payload: any) => {
  const url = "http://localhost:3000/registration";

  try {
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const DownloadData = async (payload: any) => {
  const url = "https://marriage-portal-api.onrender.com/download";

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

export const shortByDate = async (payload: any) => {
  const url = "https://marriage-portal-api.onrender.com/shortByDate";

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

export const updateUser = async () => {
  const url = "https://marriage-portal-api.onrender.com/updateUserDetails";

  try {
    const response = await axios.patch(url, {
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

export const setPassword = async (setPassword: string, payload: any) => {
  const url = `https://marriage-portal-api.onrender.com/setPassword?setPasswordToken=${setPassword}`;

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
