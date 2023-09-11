import axios from "axios";

// const token: string = "";
const BASE_URL = process.env.REACT_APP_HOST;
console.log("BASE_URL", BASE_URL);

const custom_axios = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    // Authorization: "Bearer " + token,
    Authorization: "Bearer " + localStorage.getItem("token"),
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default custom_axios;
