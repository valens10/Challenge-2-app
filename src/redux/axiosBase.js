import axios from "axios";

const url = "https://album-photos-api.herokuapp.com/api/";

const http = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
