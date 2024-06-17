import React from 'react'

import styles from './TransactionsListItem.module.css'

export const TransactionsListItem = ({transaction}) => {
    const {id, type, amount, currency } = transaction;
    return (
    <>
      <td className={styles.line__item}>{type}</td>
      <td className={styles.line__item}>{amount}</td>
      <td className={styles.line__item}>{currency}</td>
    </>

  )
}
