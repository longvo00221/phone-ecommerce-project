import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "https://be-phone-eu7f.onrender.com/",
});

axiosRequest.interceptors.request.use((config) => {
  if (localStorage.getItem("USER_INFO_KEY")) {
    const userInfo = JSON.parse(localStorage.getItem("USER_INFO_KEY") || "{}");
    const accessToken = userInfo.accessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export { axiosRequest };
