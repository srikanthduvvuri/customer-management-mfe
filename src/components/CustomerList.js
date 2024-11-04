import React, { useEffect, useState } from 'react';
import { getCustomers } from '../api/customerApi';
import CustomerDetails from './CustomerDetails';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await getCustomers();
            setCustomers(response.data);
        };
        fetchCustomers();
    }, []);

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer._id} onClick={() => setSelectedCustomer(customer)}>
                        {customer.name}
                    </li>
                ))}
            </ul>
            {selectedCustomer && <CustomerDetails customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />}
        </div>
    );
};

export default CustomerList;
