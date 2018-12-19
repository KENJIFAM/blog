import { User } from "../model/User";
import { FetchUserAction, ActionTypes } from "../actions";

export default (state: User[] = [], action: FetchUserAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}