import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleCustomerAdded = () => {
        setRefresh(prev => !prev); // Toggle refresh to reload customer list
    };

    return (
        <div>
            <h1>Customer Management System</h1>
            <CustomerForm onCustomerAdded={handleCustomerAdded} />
            <CustomerList />
        </div>
    );
};

export default App;
