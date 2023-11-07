import { useState } from 'react';
import { Card, ContactForm, PageTitle } from 'src/components';
import CheckCircle from 'src/assets/svgs/check-circle.svg';

const SuccessScreen = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#6eadc0', fontSize: 36, margin: 0 }}>
        Message was successfully sent!
      </h1>

      <div
        style={{
          width: '100%',
          display: 'flex',
          placeContent: 'center',
          padding: '60px 0',
        }}
      >
        <img
          style={{
            width: 90,
            height: 90,
            filter:
              'invert(67%) sepia(80%) saturate(3692%) hue-rotate(358deg) brightness(102%) contrast(106%)',
          }}
          src={CheckCircle}
        />
      </div>

      <Card>
        <p>
          I regularly check my email. You can expect a response within 48 hours.
        </p>
      </Card>
    </div>
  );
};

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSuccess = () => {
    setFormSubmitted(true);
  };

  return formSubmitted ? (
    <SuccessScreen />
  ) : (
    <>
      <PageTitle text='Send me a message' />
      <ContactForm onSuccess={onSuccess} />
    </>
  );
}
