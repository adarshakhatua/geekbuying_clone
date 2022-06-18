import { legacy_createStore as createStore, applyMiddleware, combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "./products/reducer";

const rootReducer = combineReducers({
    product:ProductReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));