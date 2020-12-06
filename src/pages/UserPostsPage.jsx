import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fetchUserPostsById } from '../services/users-api';
import UserPosts from '../components/UserPosts/UserPosts';
import styles from '../Css/UserPostsPage.module.css';

const getIdFromProps = props => props.match.params.userId;

export default class UserDetailsPage extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    fetchUserPostsById(id).then(({ data }) => this.setState({ posts: data }));
  }

  handleBackToUsers = () => {
    const { location, history } = this.props;
    location.state ? history.push(location.state.prevPage) : history.goBack();
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        {posts && (
          <>
            <BrowserRouter>
              <button
                type="button"
                className={styles.btn}
                onClick={this.handleBackToUsers}
              >
                BACK TO USERS
              </button>
              <UserPosts userPosts={posts} />
            </BrowserRouter>
          </>
        )}
      </>
    );
  }
}
