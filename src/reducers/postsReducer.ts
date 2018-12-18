import { ActionTypes, FetchPostsAction } from "../actions";
import { Post } from "../model/Post";

export default (state: Post[] = [], action: FetchPostsAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}