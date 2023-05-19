import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

const middleware = [thunk];

const store = configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;