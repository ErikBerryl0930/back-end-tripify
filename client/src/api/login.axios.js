import { setLogin, setLoading, setError, setAdmin } from "../features/authSlice"

import axios from "axios";

const BASE_URL = "http://localhost:3000/api/users"

export const auth = (form) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {
            const response = await axios({
                method: "POST",
                url: BASE_URL + "/login",
                data: form
            })

            const isAdmin = response.data.user.role
            if (isAdmin === "admin") {
                dispatch(setLogin(response.data.barier_token))
            }

            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)
            dispatch(setError(error.response.data.message))
            dispatch(setLoading(false))
        }
    }
}
