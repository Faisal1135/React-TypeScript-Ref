import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

const searchRepositorys = (term: string) => {
  return async (dispath: Dispatch<Action>) => {
    dispath({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const results = data.objects.map((r: any) => r.package.name);
      dispath({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: results,
      });
    } catch (error) {
      dispath({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
export default searchRepositorys;
