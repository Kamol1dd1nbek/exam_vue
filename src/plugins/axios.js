import axios from "axios";

const $http = axios.create({
   baseURL: "http://34.125.211.64:3300/api/",
});

$http.interceptors.request.use(
   (config) => {
      let token = localStorage.getItem("token");
      if (token) {
         config.headers["Authorization"] = `Bearer ${token}`;
      }
      config.headers["Accept"] = "application/json";
      config.headers["Access-Control-Allow-Origin"] = "*";
      return config;
   },
   (error) => Promise.reject(error)
);
export default $http;
