import { useState } from 'react';
import { Card, ContactForm, PageTitle } from 'src/components';
import CheckCircle from 'src/assets/svgs/check-circle.svg';
import MessageIcon from 'src/assets/images/thought-bubble.png';
import EmailIcon from 'src/assets/svgs/email.svg';

import styles from './ContactPage.module.css';

const SuccessScreen = () => {
  return (
    <div className={styles.SuccessScreenContainer}>
      <PageTitle
        text='Message was successfully sent!'
        style={{ fontSize: 36, color: 'var(--color-primary)' }}
      />

      <div className={styles.SuccessIconWrapper}>
        <img src={CheckCircle} />
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
      <div className={styles.TitleContainer}>
        <PageTitle text="Okay, let's chat!" />

        <img src={MessageIcon} alt='Message Icon' />
      </div>

      <div className={styles.EmailContainer}>
        <img src={EmailIcon} alt='Email Icon' />

        <p>aaoyanguren@outlook.com</p>
      </div>

      <ContactForm onSuccess={onSuccess} />
    </>
  );
}
