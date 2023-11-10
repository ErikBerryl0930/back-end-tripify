const access_token = localStorage.getItem("access_token");

const instanceAxios = axios.create({
    baseURL: URL,
    headers: {
        access_token: `${access_token}`,
        "Content-Type": "application/json",
    },
});

import axios from "axios";

const BASE_URL = "http://localhost:3000/users"

export const login = (form) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {
            const response = await axios({
                method: "POST",
                url: BASE_URL + "/login",
                data: from
            })

            dispatch(setLogin(response.data.barier_token))
            dispatch(setLoading(false))
        } catch (e) {
            dispatch(setError(error.response.data.message))
            dispatch(setLoading(false))
        }
    }
}
