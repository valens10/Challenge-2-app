import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/";

const http = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
