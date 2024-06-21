import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Assuming this context is correctly set up
import { useCurrency } from './CurrencyProvider'; // Adjust import path as per your project structure

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const { currency } = useCurrency(); // Fetch currency value from context

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;