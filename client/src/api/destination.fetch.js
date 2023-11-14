import { instanceAxios } from "./instance.axios";
import { setError,  setLoading,  setDestination, setDestinationById } from "../features/destinationSlice";

const BASE_URL = "http://localhost:3000/api/destinations";

export const getDestinations = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let response = await instanceAxios({
        method: "GET",
        url: BASE_URL,
      });

      dispatch(setDestination(response.data));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response.data.message));
      dispatch(setLoading(false));
    }
  };
};

export const getDestinationById = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let response = await instanceAxios({
        method: "GET",
        url: BASE_URL + "/information/" + id,
      });

      console.log(response.data)
      dispatch(setDestinationById(response.data));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response.data.message));
      dispatch(setLoading(false));
    }
  };
};

export const addDestination = (form) => {
  return async (dispatch) => {
    dispatch(setLoading(false))
    try {

      let response = await instanceAxios({
        method: "POST",
        url: BASE_URL + "/add",
        data: form
      })

      // console.log(response.data)

    } catch (error) {
      console.log(error)
      dispatch(setError(error.response.data.message))
      dispatch(setLoading(false))
    }
  }
}

export const editDestination = (id, form) => {
  return async (dispatch) => {
    dispatch(setLoading(false))
    try {

      let response = await instanceAxios({
        method: "PATCH",
        url: BASE_URL + "/edit/" + id,
        data: form
      })

      // console.log(response.data)

    } catch (error) {
      console.log(error)
      dispatch(setError(error.response.data.message))
      dispatch(setLoading(false))
    }
  }
}

export const removeDestination = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(false))
    try {

      let response = await instanceAxios({
        method: "DELETE",
        url: BASE_URL + "/remove/" + id,

      })

    } catch (error) {
      console.log(error)
      dispatch(setError(error.response.data.message))
      dispatch(setLoading(false))
    }
  }
}