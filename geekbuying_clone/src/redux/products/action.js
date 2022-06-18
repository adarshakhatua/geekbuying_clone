import axios from "axios";
import { productAction } from "./actionType";


export const fetchProductRequest = () => {
    return {
        type: productAction.FETCH_PRODUCT_REQUEST,
    }
}

export const fetchProductSuccess = (data) => {
    return {
        type: productAction.FETCH_PRODUCT_SUCCESS,
        payload:data,
    }
}

export const fetchProductFailure = (data) => {
    return {
        type: productAction.FETCH_PRODUCT_FAILURE,
        payload: data,
    }
}

export const fetchProduct = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
    .then((res) => dispatch(fetchProductSuccess(res.data)))
    .catch((err) => dispatch(fetchProductFailure(err.message)))
}