import React, { useState, useEffect } from 'react';
import { updateCustomer } from '../api/customerApi';

const CustomerDetails = ({ customer, onClose }) => {
    const [formData, setFormData] = useState({ ...customer });

    useEffect(() => {
        setFormData(customer);
    }, [customer]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCustomer(customer._id, formData);
        onClose(); // Close the details view
        // Optionally, refresh the customer list
    };

    return (
        <div>
            <h2>Edit Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <button type="submit">Update Customer</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    );
};

export default CustomerDetails;
