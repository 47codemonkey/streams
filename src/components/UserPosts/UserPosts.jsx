import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserPosts.module.css';

const UserPosts = ({ userPosts }) => (
  <ul className={styles.UserPostsContainer}>
    {userPosts.map(({ content, id, createdAt, editedAt, image }) => {
      return (
        <li key={id}>
          <div className={styles.PostContent}>{content}</div>
          <p className={styles.PostCreatedAt}>Created: {createdAt}</p>
          <p className={styles.PostEditedAt}>Edited: {editedAt}</p>
          <img className={styles.PostImage} src={image} alt="invalid img url" />
        </li>
      );
    })}
  </ul>
);

UserPosts.propTypes = {
  userPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      editedAt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserPosts;
