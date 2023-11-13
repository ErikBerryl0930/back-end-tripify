import { instanceAxios } from "./instance.axios";
import { setError, setCategory, setLoading } from "../features/categorySlice";

const BASE_URL = "http://localhost:3000/api/categories";

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let response = await instanceAxios({
        method: "GET",
        url: BASE_URL,
      });

      dispatch(setCategory(response.data));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response.data.message));
      dispatch(setLoading(false));
    }
  };
};

export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch(setLoading(false))
    try {

      let response = await instanceAxios({
        method: "POST",
        url: BASE_URL + "/add",
        data: form
      })

      console.log(response.data)

    } catch (error) {
      console.log(error)
      dispatch(setError(error.response.data.message))
      dispatch(setLoading(false))
    }
  }
}

export const editCategory = (id, form) => {
  return async (dispatch) => {
    dispatch(setLoading(false))
    try {

      let response = await instanceAxios({
        method: "PATCH",
        url: BASE_URL + "/edit" + id,
        data: form
      })

      console.log(response.data)

    } catch (error) {
      console.log(error)
      dispatch(setError(error.response.data.message))
      dispatch(setLoading(false))
    }
  }
}

export const removeCategory = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(false))
    try {

      let response = await instanceAxios({
        method: "DELETE",
        url: BASE_URL + "/remove/" + id,

      })

      console.log(response.data)

    } catch (error) {
      console.log(error)
      dispatch(setError(error.response.data.message))
      dispatch(setLoading(false))
    }
  }
}