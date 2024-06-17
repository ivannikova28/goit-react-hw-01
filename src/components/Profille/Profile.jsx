import React from 'react';

import clsx from 'clsx';

import styles from './Profile.module.css'

export const Profile = ({
  name: username,
  tag,
  location,
  image: avatar,
  stats }) => {
  
  return (
    <div className={styles.profile__block}>
      <div className={styles.profile}>
        <img src={avatar} alt="User avatar" className={styles.profile__img} />
        <p className={clsx(styles.text, styles.name)}>{username}</p>
        <p className={clsx(styles.text, styles.tag)}>@{tag}</p>
        <p className={clsx(styles.text, styles.location)}>{location}</p>
      </div>

      <ul
        className={clsx(
          // styles["stats-list"],
          // styles.statsList,
          styles.stats__list
        )}
      >
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
};
