import React from 'react'

import clsx from 'clsx'

import styles from './FriendListItem.module.css'

export const FriendListItem = ({friend}) => {
    const {id, avatar: img, name, isOnline} = friend
    
  return (
    <div className={styles.wrap}>
        <img src={img} alt="Avatar" width="48" />
        <p className={clsx(styles.text)}>{name}</p>
        <p className={clsx(styles.text, styles.status, !!friend.isOnline ? styles.online : styles.offline)}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}
