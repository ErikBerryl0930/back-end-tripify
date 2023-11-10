import axios from "axios"
const token = localStorage.getItem("token");

const BASE_URL = "http://localhost:3000/api/users"

export const instanceAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Barier ${token}`,
        "Content-Type": "application/json",
    },
});
