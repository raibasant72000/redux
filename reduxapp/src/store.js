import { createStore } from "redux";
import rootreducer from "./client/reducers/reducer";
const store = createStore(rootreducer);

export default store;
