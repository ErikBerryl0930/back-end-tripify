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

      console.log(response.data);
      dispatch(setCategory(response.data));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response.data.message));
      dispatch(setLoading(false));
    }
  };
};
