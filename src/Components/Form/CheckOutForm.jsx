import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './CheckOutForm.css';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';

const CheckoutForm = ({ setApplyForm }) => {
  const stripe = useStripe();
  const elements = useElements();
  const AxiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [cardError, setCardError] = useState('');
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    getClientSecret(500);
  }, []);

  const getClientSecret = async price => {
    const { data } = await AxiosSecure.post('/create-payment-intent', {
      price,
    });
    console.log(data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setProcessing(false);
      setCardError(error.message);
      return;
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('');
    }

    // add this in your way confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
   
      const ScholarhipInfo = {
        transactinId: paymentIntent.id,
        Date: new Date(),
      };
      setProcessing(false);
      setApplyForm(true)
    }
  };

  return (
    <>
      <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          className="bg-orange-500 p-3 rounded-xl text-white font-bold "
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? (
            <ImSpinner9 size={24} className={'animate-spin'}></ImSpinner9>
          ) : (
            'Pay'
          )}
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
