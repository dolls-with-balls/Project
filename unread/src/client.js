import axios from "axios";

export const client = axios.create({
  // baseURL: "https://unread-backend1.onrender.com",
  baseURL: "https://unread-backend.onrender.com/",
  headers: {
    Accept: "application/json",
    authorization: localStorage.getItem("token"),
  },
});
