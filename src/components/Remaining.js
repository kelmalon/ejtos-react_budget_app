import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from "./CurrencyManager";


const Remaining = () => {
    const { expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    const { selectedCurrency } = useCurrency();

    
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {selectedCurrency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
