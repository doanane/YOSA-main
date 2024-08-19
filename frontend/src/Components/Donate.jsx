import React, { useState } from 'react';
import axios from 'axios';
import { PaystackButton } from 'react-paystack';
import '../Styles/Donate.css';

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    donationAmount: '',
  });

  const [paystackConfig, setPaystackConfig] = useState({
    publicKey: 'pk_test_fef259dc53273c2348a226b62931b00eb6f4cb7c', 
    amount: 0,
    email: '',
    reference: '',
    currency: 'GHS', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountInCedis = formData.donationAmount * 100; // Paystack accepts amount in cedis
    setPaystackConfig({
      ...paystackConfig,
      amount: amountInCedis,
      email: formData.email,
      reference: `ref_${Math.floor(Math.random() * 1000000000 + 1)}`, // Generate a unique reference
    });
  };

  const onSuccess = (reference) => {
    axios.get(`/api/verify-payment/?reference=${reference.reference}`)
      .then((response) => {
        console.log('Payment verified:', response.data);
      })
      .catch((error) => {
        console.error('Error verifying payment:', error);
      });
  };

  const onClose = () => {
    console.log('Transaction was not completed, window closed.');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-header">
          <h1>YOSA</h1>
          <h2>Donation Form</h2>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>How much do you wish to donate?</label>
          <div className="donation-input">
            <span className="currency">GHS</span>
            <input
              type="number"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              placeholder="Donation Amount"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Proceed to Pay
          </button>
        </div>
      </form>
      {paystackConfig.email && paystackConfig.amount > 0 && (
        <PaystackButton
          {...paystackConfig}
          onSuccess={onSuccess}
          onClose={onClose}
          text="Pay with Money Mobile or Card"
          className="paystack-button submit-button"
          type="submit"
        />
      )}
    </div>
  );
};

export default Donate;
