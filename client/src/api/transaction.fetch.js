import { instanceAxios } from "../api/instance.axios"
import { setError, setTransaction, setLoading } from "../features/transactionSlice";

const BASE_URL = "http://localhost:3000/api/transactions"

export const getTrans = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {
            let response = await instanceAxios({
                method: "GET",
                url: BASE_URL + '/all',
            })

            console.log(response.data.transactions)
            dispatch(setTransaction(response.data.transactions))
        } catch (error) {
            console.log(error)
            dispatch(setError(error.response.data.message))
            dispatch(setLoading(false))
        }
    }
}