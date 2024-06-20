import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({children}) => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const changeCurrency = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <CurrencyContext.Provider value={{ selectedCurrency, changeCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    return useContext(CurrencyContext);
};