import jsonPlaceholder from '../apis/jsonPlaceholder';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Post } from '../model/Post';

export enum ActionTypes {
  FETCH_POSTS = 'FETCH_POSTS'
};

export interface FetchPostsAction {
  type: ActionTypes.FETCH_POSTS,
  payload: Post[]
}

export const fetchPosts: ActionCreator<
  ThunkAction<Promise<FetchPostsAction>, {}, void, FetchPostsAction>
> = () => async (dispatch: Dispatch<FetchPostsAction>): Promise<FetchPostsAction> => {
  const response = await jsonPlaceholder.get('/posts');
  return dispatch({
    type: ActionTypes.FETCH_POSTS,
    payload: response.data
  });
};

export type Action = Promise<FetchPostsAction>;