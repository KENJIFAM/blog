import jsonPlaceholder from '../apis/jsonPlaceholder';
import { AxiosResponse } from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export enum ActionTypes {
  FETCH_POSTS = 'FETCH_POSTS'
};

export interface FetchPostsAction {
  type: ActionTypes.FETCH_POSTS,
  payload: AxiosResponse
}

export const fetchPosts: ActionCreator<
  ThunkAction<Promise<FetchPostsAction>, {}, void, FetchPostsAction>
> = () => async (dispatch: Dispatch<FetchPostsAction>): Promise<FetchPostsAction> => {
  const response = await jsonPlaceholder.get('/posts');
  return dispatch({
    type: ActionTypes.FETCH_POSTS,
    payload: response
  });
};

export type Action = Promise<FetchPostsAction>;