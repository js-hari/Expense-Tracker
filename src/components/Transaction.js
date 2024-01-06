 import React, { useContext } from 'react'
 import { GlobalContext } from '../Context/GlobalState'

 
 export const Transaction = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
   return (
    <li className={transaction.amount < 0 ? 'deduct' : 'add'}>
            {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
        </li>
   )
 }
 

 