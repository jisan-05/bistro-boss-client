import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
      <div>
       <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
       </Elements>
      </div>
    </div>
  );
};

export default Payment;