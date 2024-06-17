import React from 'react'

import clsx from 'clsx'

import styles from './FriendList.module.css'

import { FriendListItem } from '../FriendListItem/FriendListItem'

export  const FriendList = ({friends, ...rest}) => {
  return (
    <ul className={styles.friends__list}
    >
        {!!friends.length && [...friends].map(friend => {
            return <li key={friend.id} className={clsx(styles.friends__list_item, !!friend.isOnline ? styles.online : styles.offline)}>
                <FriendListItem friend={friend}/>
            </li>
        })}
    </ul>
  )
}
