import { productAction } from "./actionType";

const initState = {
    loading: false,
    error: false,
    data:[],
}

export const ProductReducer = (state=initState, action) => {
    switch (action.type) {
        case productAction.FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error:false,
            }
        case productAction.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data:action.payload,
            }
        case productAction.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}