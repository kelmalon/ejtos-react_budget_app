import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from './CurrencyProvider';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const {currency} = useCurrency();

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
