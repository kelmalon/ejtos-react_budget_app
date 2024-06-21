import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from './CurrencyProvider';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const { currency } = useCurrency();

    const handleBudgetChange = (event) => {
        if (newBudget > parseInt('20000')){
            alert("The budget cannot exceed 20,000");
            setNewBudget('');
            return;
        }
        
        if (newBudget < parseInt(totalExpenses)){
            alert("The budget cannot be less than the allocated expenses");
            setNewBudget('');
            console.log(totalExpenses);
            return;
        }

        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}{budget}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
