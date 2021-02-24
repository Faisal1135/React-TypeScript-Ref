import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/repository_reducer";

export const store = createStore(
  reducer,
  { loading: false, data: [], error: null },
  applyMiddleware(thunk)
);
