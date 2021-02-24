import { ActionType } from "../action-types";

interface SearchRepository {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositorySuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoryError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepository
  | SearchRepositorySuccess
  | SearchRepositoryError;
