import React from 'react'

export const Transaction = ({ transactions }) => {
  return (
    <li className="minus">
          {transactions.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>
  )
}
