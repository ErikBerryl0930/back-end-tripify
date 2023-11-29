import { setLogin, setLoading, setError, setUser } from "../features/authSlice"
import { setProfile } from "../features/profileSlice";

import axios from "axios";
import Swal from "sweetalert2";

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

            dispatch(setProfile(response.data.user))
            console.log(response.data.user)

            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)
            dispatch(setError(error.response.data.message))
            dispatch(setLoading(false))
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: "You have entered an invalid email or password",
            });
        }
    }
}
