import { instanceAxios } from "../api/instance.axios"
import axios from "axios";
import { setError, setUser, setLoading } from "../features/userSlice";

const BASE_URL = "http://localhost:3000/api/users"

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {
            let response = await instanceAxios({
                method: "GET",
                url: BASE_URL + '/',
            })

            console.log(response.data.users)
            dispatch(setUser(response.data.users))
        } catch (error) {
            console.log(error)
            dispatch(setError(error.response.data.message))
            dispatch(setLoading(false))
        }
    }
}