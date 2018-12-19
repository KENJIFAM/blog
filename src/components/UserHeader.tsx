import * as React from 'react';
import { connect } from 'react-redux';
import { User } from '../model/User';

interface Props {
  id: number,
  user?: User
}

interface State {
  users: User[]
}

class UserHeader extends React.Component<Props, {}> {
  render() {    
    const { user } = this.props;

    if (!user) return null;

    return <div className='header'>{user.name}</div>;
  };
};

const mapStateToProps = (state: State, ownProps: Props) => {    
  return {user: state.users.find(user => user.id === ownProps.id) };
}

export default connect(mapStateToProps)(UserHeader);