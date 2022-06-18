import { productAction } from "./actionType";

const initState = {
    loading: false,
    error: false,
    data: [],
    newForYou:[],
    deal_of_day: [],
    feature_product: [],
    brand1:[],
    brand2:[],
    brand3:[],
    brand4:[],
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
        case productAction.FETCH_DEAL_OF_DAY_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                deal_of_day: action.payload,
            }
        case productAction.FETCH_FEATURE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                feature_product: action.payload,
            }
        case productAction.FETCH_NEW_FOR_U_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                newForYou: action.payload,
            }
        case productAction.FETCH_BRAND1_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                brand1: action.payload,
            }
        case productAction.FETCH_BRAND2_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                brand2: action.payload,
            }
        case productAction.FETCH_BRAND3_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                brand3: action.payload,
            }
        case productAction.FETCH_BRAND4_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                brand4: action.payload,
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