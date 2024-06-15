import React from 'react';

import clsx from 'clsx';

import styles from './Profile.module.css'

export const Profile = ({ userData, ...rest}) => {
    // console.log(userData);
    // console.log(rest);
    const {
        username,
        tag,
        location,
        avatar,
        stats
    } = userData
  return (
    <div >
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={clsx(
        // styles["stats-list"],
        // styles.statsList,
        styles.stats__list

      )}>
        <li className={styles.stats__item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.stats__item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.stats__item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
