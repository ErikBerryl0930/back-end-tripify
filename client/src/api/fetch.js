import { instanceAxios } from "../api/instance.axios"
import { setLoading, setDesntiation, setError } from "../features/slice"

const BASE_URL = "http://localhost:3000/api/destinations"

export const getDestinations = () => {
    return async (dispatch) => {

        dispatch(setLoading(true))

        try {

            let response = await instanceAxios({
                method: 'GET',
                url: BASE_URL
            })

            dispatch(setDesntiation(response.data))
            dispatch(setError(false))
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setError(false))
        }
    }
}

export const addDestination = (form) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {

            let response = await instanceAxios({
                method: 'POST',
                url: BASE_URL + '/add',
                data: form,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }

            })

            console.log(response.data)

        } catch (error) {
            console.log(error)
            dispatch(setError(error.response.data.message))
            dispatch(setError(false))
        }
    }
}