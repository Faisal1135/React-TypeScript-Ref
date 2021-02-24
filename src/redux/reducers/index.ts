import { combineReducers } from "redux";
import repositoryReducer from "./repository_reducer";

const reducers = combineReducers({
  repository: repositoryReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
