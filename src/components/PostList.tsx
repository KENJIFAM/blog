import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, FetchPostsAction } from '../actions';

interface Props {
  fetchPosts: () => FetchPostsAction
};

class PostList extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    return <div>PostList</div>;
  };
};

export default connect(null, { fetchPosts })(PostList);