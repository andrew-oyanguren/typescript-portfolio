import { useState } from 'react';

const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = async (email: string, enquiry: string, message: string) => {
    setIsLoading(true);

    const url = import.meta.env.VITE_EJS_URL;

    const payload = {
      service_id: import.meta.env.VITE_EJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EJS_USER_ID,
      template_params: {
        user_email: email,
        enquiry,
        message,
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setError('Please try again');
      }
    } catch (err) {
      console.log('An error Occurred: ', err);
      setError('Please try again');
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendEmail,
  };
};

export default useSendEmail;
