import jsonPlaceholder from '../apis/jsonPlaceholder';
import { ActionCreator, Dispatch, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Post } from '../model/Post';
import { User } from '../model/User';
import * as _ from 'lodash';

export enum ActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_USER = 'FETCH_USER'
};

export interface FetchPostsAction {
  type: ActionTypes.FETCH_POSTS,
  payload: Post[]
};

export interface FetchUserAction {
  type: ActionTypes.FETCH_USER,
  payload: User
};

export interface State {
  posts: Post[]
}

export const fetchPostsAndUsers: ActionCreator<
  ThunkAction<Promise<void>, State, null, Action>
> = () => async (dispatch: ThunkDispatch<State, null, Action>, getState: () => State): Promise<void> => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts: ActionCreator<
  ThunkAction<Promise<FetchPostsAction>, {}, void, FetchPostsAction>
> = () => async (dispatch: Dispatch<FetchPostsAction>): Promise<FetchPostsAction> => {
  const response = await jsonPlaceholder.get('/posts');
  return dispatch({
    type: ActionTypes.FETCH_POSTS,
    payload: response.data
  });
};

export const fetchUser: ActionCreator<
  ThunkAction<Promise<FetchUserAction>, {}, void, FetchUserAction>
> = (id: number) => async (dispatch: Dispatch<FetchUserAction>): Promise<FetchUserAction> => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  return dispatch({
    type: ActionTypes.FETCH_USER,
    payload: response.data
  });
};