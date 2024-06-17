import React from 'react'

import styles from "./TransactionHistory.module.css"

import { TransactionsList } from './TransactionsList/TransactionsList'

export const TransactionHistory = ({transactions}) => {
  return (
    <table className={styles.table__transactions}>
        <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Amount</th>
              <th className={styles.th}>Currency</th>
            </tr>
        </thead>

        <tbody className={styles.tbody}>
            {!!transactions.length && <TransactionsList transactions={transactions}/>}
        </tbody>
    </table>
  )
}
