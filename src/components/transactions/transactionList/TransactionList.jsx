import transactions from '../../../data/transactions.json';
import { TransactionItem } from '../transactionItem/TransactionItem';

export const TransactionList = () => {
  return (
    <table>
        <thead>
            
            <tr>
                <th>type</th>
                <th>amount</th>
                <th>currency</th>
            </tr>
        </thead>
        {transactions.map(({id, type, amount, currency}) => {
            return ( 
            <TransactionItem key={id} type={type} amount={amount} currency={currency} />
            )
        })
        }
    </table>
  )
}
