import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const Transaction_list = () => {

  const {transactions} = useContext(GlobalContext); // pulling our transaction to be used within our components


  return (
    <>
    <h3>History</h3>
      <ul className="list">
        {transactions.map(transactions => (<Transaction key={transactions.id} transactions={transactions}/>))}
      </ul>
    </> // We can now see our transactions onto the screen
  )
}
