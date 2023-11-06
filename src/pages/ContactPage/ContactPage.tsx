import { useState } from 'react';
import { ContactForm, PageTitle } from 'src/components';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      <PageTitle text='Send me a message' />
      {formSubmitted ? (
        <p>Success Screen</p>
      ) : (
        <ContactForm onSuccess={onSuccess} />
      )}
    </>
  );
}
