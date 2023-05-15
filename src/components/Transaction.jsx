// import React from 'react'
// import { useContext } from 'react'
// import { GlobalContext } from '../context/GlobalState'

// export const Transaction = ({transaction}) => {
// const {deleteTransaction} = useContext(GlobalContext)

//     const sign = transaction.amount > 0 ? '+' : '-'
//   return (
//     <div>
//         <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
//         {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
//   </li>
//   </div>
//   )
// }

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? '+' : '-';
  const amount = Math.abs(transaction.amount);

  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text} <span>{`${sign} ${amount}`}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
};
