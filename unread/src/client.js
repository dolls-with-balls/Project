import axios from "axios";

export const client = axios.create({
    baseURL: "https://unread-backend1.onrender.com/",
    headers: {
        Accept: "application/json",
        // Authorization:localStorage.getItem("token")
    }
})