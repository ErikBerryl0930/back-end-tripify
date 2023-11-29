import { instanceAxios } from "../api/instance.axios";
import { setLoading, setProfile, setError } from "../features/profileSlice";

const BASE_URL = "http://localhost:3000/api/users";

// export const getProfile = () => {
//   return async (dispatch) => {
//     dispatch(setLoading(true));

//     try {
//       let response = await instanceAxios({
//         method: "GET",
//         url: BASE_URL + "/account",
//       });

//       console.log(response.data);
//       dispatch(setProfile(response.data));
//       dispatch(setError(false));
//     } catch (error) {
//       console.log(error.response.data);
//       dispatch(setError(error.response.data.message));
//       dispatch(setError(false));
//     }
//   };
// };

export const changePWD = (form) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try{

            let response = await instanceAxios({
                method: "PATCH",
                url: BASE_URL + "/changepassword",
                data: form
            })

            console.log(response.data)

            dispatch(setLoading(false));

        }catch(error){
            console.log(error)
            dispatch(setError(error.response.data.message));
        }
    }
}