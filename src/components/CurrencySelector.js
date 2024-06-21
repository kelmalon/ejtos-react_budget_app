import React from 'react';
import { useCurrency } from './CurrencyProvider'; // Adjust import path as per your project structure

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <label htmlFor="currency">Choose a currency:</label>
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;