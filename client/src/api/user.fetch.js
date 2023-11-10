import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceAxios } from "../api/instance.axios"
import axios from "axios";

const BASE_URL = "http://localhost:3000/users"

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const response = await instanceAxios.get(`${BASE_URL}`)
    return response.data
})