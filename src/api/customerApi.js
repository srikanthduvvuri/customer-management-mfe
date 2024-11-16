import axios from 'axios';

// Update with backend URL; Real life environment this needs to be read from ENV variable
const API_URL = 'http://127.0.0.1:61473/api/customers'; 

//const API_URL = 'http://localhost:5001/api/customers'; // Update with backend URL

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
