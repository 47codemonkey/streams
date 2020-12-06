import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UsersList.module.css';

const UsersList = ({ users, onDeleteUser }) => (
  <ul className={styles.UsersContainer}>
    {users.map(({ id, createdAt, avatar, name, role, phone, city }) => (
      <li key={id} className={styles.UsersList}>
        <Link to={`/user/${id}`} className={styles.Link}>
          <img className={styles.UserImage} src={avatar} alt="avatar" />
          <div className={styles.UserName}>{name}</div>
          <div className={styles.UserRole}>{role}</div>
          <div className={styles.UserInfo}>Phone: {phone}</div>
          <div className={styles.UserInfo}>City: {city}</div>
          <div className={styles.UserInfo}>Reg time: {createdAt}</div>
        </Link>
        <button
          className={styles.DeleteUserBtn}
          type="button"
          onClick={() => onDeleteUser(id)}
        >
          DELETE
        </button>
      </li>
    ))}
  </ul>
);

export default UsersList;
