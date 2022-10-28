import {createStore} from "redux";
import createRootReducer from "./reducers";

const store = createStore(createRootReducer(history))
export default store;