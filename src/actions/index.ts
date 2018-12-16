export enum ActionTypes {
  FETCH_POSTS = 'FETCH_POSTS'
};

export interface FetchPostsAction {
  type: ActionTypes.FETCH_POSTS,
}

export const fetchPosts = (): FetchPostsAction => {
  return {
    type: ActionTypes.FETCH_POSTS,
  };
};

export type Action = FetchPostsAction;