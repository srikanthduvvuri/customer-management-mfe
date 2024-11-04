import axios from 'axios';

const API_URL = 'http://localhost:5001/api/customers'; // Update with your backend URL

export const getCustomers = async () => {
    return await axios.get(API_URL);
};

export const createCustomer = async (customerData) => {
    return await axios.post(API_URL, customerData);
};

export const getCustomerById = async (customerId) => {
    return await axios.get(`${API_URL}/${customerId}`);
};

export const updateCustomer = async (customerId, customerData) => {
    return await axios.put(`${API_URL}/${customerId}`, customerData);
};
