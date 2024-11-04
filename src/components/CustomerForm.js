import React, { useState } from 'react';
import { createCustomer } from '../api/customerApi';

const CustomerForm = ({ onCustomerAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCustomer(formData);
        onCustomerAdded(); // Callback to refresh the list
        setFormData({ name: '', email: '' }); // Reset the form
    };

    return (
        <div>
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default CustomerForm;
