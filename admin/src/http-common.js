import axios from "axios";

export default axios.get({
//   baseURL: "http://localhost:8000/api",
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json"
  }
});