import React from 'react'

import styles from './TransactionsList.module.css'

import { TransactionsListItem } from '../TransactionsListItem/TransactionsListItem'

export const TransactionsList = ({transactions}) => {
  return (
    <>
      {!!transactions.length && transactions.map(transaction => {
        return (
          <tr key={transaction.id} className={styles.line}>
            <TransactionsListItem transaction={transaction}/>
          </tr>
        )
      })}
    </>
  )
}
