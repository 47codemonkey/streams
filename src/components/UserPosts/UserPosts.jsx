import React from 'react';
import styles from './UserPosts.module.css';

const UserPosts = ({ userPosts }) => (
  <ul className={styles.UserPostsContainer}>
    {userPosts.map(({ content, id, createdAt, editedAt, image }) => {
      return (
        <li key={id}>
          <div>{content}</div>
          <p className={styles.PostCreatedAt}>Created: {createdAt}</p>
          <p className={styles.PostEditedAt}>Edited: {editedAt}</p>
          <img className={styles.PostImage} src={image} alt="img" />
        </li>
      );
    })}
  </ul>
);
export default UserPosts;
