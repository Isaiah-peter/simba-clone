import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiconfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;
