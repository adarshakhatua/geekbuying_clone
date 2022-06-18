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
export const fetchDealOfDayProductSuccess = (data) => {
    return {
        type: productAction.FETCH_DEAL_OF_DAY_PRODUCT_SUCCESS,
        payload: data,
    }
}
export const fetchFeatureProductSuccess = (data) => {
    return {
        type: productAction.FETCH_FEATURE_PRODUCT_SUCCESS,
        payload: data,
    }
}
export const fetchNewForUProductSuccess = (data) => {
    return {
        type: productAction.FETCH_NEW_FOR_U_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const fetchBrand1ProductSuccess = (data) => {
    return {
        type: productAction.FETCH_BRAND1_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const fetchBrand2ProductSuccess = (data) => {
    return {
        type: productAction.FETCH_BRAND2_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const fetchBrand3ProductSuccess = (data) => {
    return {
        type: productAction.FETCH_BRAND3_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const fetchBrand4ProductSuccess = (data) => {
    return {
        type: productAction.FETCH_BRAND4_PRODUCT_SUCCESS,
        payload: data,
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

export const fetchDealOfDayProduct = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
        .then((res) => dispatch(fetchDealOfDayProductSuccess(res.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
}

export const fetchFeatureProduct = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
        .then((res) => dispatch(fetchFeatureProductSuccess(res.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
}

export const fetchNewForUProduct = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
        .then((res) => dispatch(fetchNewForUProductSuccess(res.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
}

export const fetchBrand1Product = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
        .then((res) => dispatch(fetchBrand1ProductSuccess(res.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
}

export const fetchBrand2Product = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
        .then((res) => dispatch(fetchBrand2ProductSuccess(res.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
}

export const fetchBrand3Product = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
        .then((res) => dispatch(fetchBrand3ProductSuccess(res.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
}

export const fetchBrand4Product = (payload) => async (dispatch) => {
    dispatch(fetchProductRequest());
    axios({
        url: "http://localhost:8080/products",
        method: "GET",
        params: {
            ...payload,
        },
    })
        .then((res) => dispatch(fetchBrand4ProductSuccess(res.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
}