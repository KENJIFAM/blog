import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers, State } from '../actions';
import { Post } from '../model/Post';
import UserHeader from './UserHeader';

interface Props {
  fetchPostsAndUsers: () => Promise<void>,
  posts: Post[]
};

class PostList extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  };

  renderList() {
    return this.props.posts.map(post => (
      <div className='item' key={post.id}>
        <i className='large middle aligned icon user' />
        <div className='content'>
          <div className='description'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader id={post.userId}/>
        </div>
      </div>
    ));
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  };
};

const mapStateToProps = (state: State) => {  
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);