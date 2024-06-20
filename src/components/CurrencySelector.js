import React from 'react';
import { useCurrency } from "./CurrencyManager";

const CurrencySelector = () => {
    const [selectedCurrency, setSelectedCurrency] = useCurrency(); // Default currency
    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };
    return (
        <div>
            <label for="currency">Choose a currency:</label>

            <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;