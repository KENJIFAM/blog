import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, Action } from '../actions';

interface Props {
  fetchPosts: () => Action
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