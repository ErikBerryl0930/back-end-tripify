import { instanceAxios } from "../api/instance.axios";
import { setLoading, setDestinations, setDestination, setError } from "../features/destinationSlice";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:3000/api/destinations"

export const getDestinations = () => {
    return async (dispatch) => {

        dispatch(setLoading(true))

        try {

            let response = await instanceAxios({
                method: 'GET',
                url: BASE_URL
            })

            dispatch(setDestinations(response.data))
            dispatch(setError(false))
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setError(false))
        }
    }
}

export const getDestinationDetail = (id) => {
    return async (dispatch) => {

        dispatch(setLoading(true))

        try {

            let response = await instanceAxios({
                method: 'GET',
                url: BASE_URL + "/information/" + id
            })

            console.log(response.data)
            dispatch(setDestination(response.data))
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
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Destination successfully added",
              showConfirmButton: false,
              timer: 1500,
            });

        } catch (error) {
            console.log(error)
            dispatch(setError(error.response.data.message))
            dispatch(setError(false))
        }
    }
}

export const editDestination = (id, form) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {

            let response = await instanceAxios({
                method: 'PATCH',
                url: BASE_URL + '/edit/' + id,
                data: form,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Destination successfully updated",
              showConfirmButton: false,
              timer: 1500,
            });

        } catch (error) {
            console.log(error)
            dispatch(setError(error.response.data.message))
            dispatch(setError(false))
        }
    }
}

export const deleteDestination = (id) => {
    return async (dispatch) => {

        dispatch(setLoading(true))

        try {

            let response = await instanceAxios({
                method: 'DELETE',
                url: BASE_URL + "/remove/" + id
            })

            // console.log(response.data)                        
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setError(false))
        }
    }
}