import React, { Component } from 'react';
import ErrorNotification from '../components/ErrorNotification/ErrorNotification';
import UsersList from '../components/UsersList/UsersList';
import * as usersAPI from '../services/users-api';

export default class HomePage extends Component {
  state = {
    users: [],
    error: null,
  };
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    usersAPI
      .fetchUsers()
      .then(({ data }) => {
        this.setState({
          users: data,
        });
      })
      .catch(error => this.setState({ error }));
  };

  deleteUser = id => {
    this.setState(state => ({
      users: state.users.filter(user => user.id !== id),
    }));
  };

  render() {
    const { users, error } = this.state;

    return (
      <div>
        {error && <ErrorNotification text={error.message} />}
        {users && users.length > 0 && (
          <UsersList users={users} onDeleteUser={this.deleteUser} />
        )}
      </div>
    );
  }
}
