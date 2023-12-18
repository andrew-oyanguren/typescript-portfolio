import { useState } from 'react';
import { Card, ContactForm, PageTitle } from 'src/components';
import CheckCircle from 'src/assets/svgs/check-circle.svg';
import MessageIcon from 'src/assets/images/thought-bubble.png';
import EmailIcon from 'src/assets/svgs/email.svg';

import styles from './ContactPage.module.css';

const SuccessScreen = () => {
  return (
    <div className={styles.SuccessScreenContainer}>
      <div className={styles.SuccessIconWrapper}>
        <img src={CheckCircle} />
      </div>

      <div className={styles.animateCard}>
        <Card>
          <p>Your message was successfully sent!</p>
        </Card>
      </div>
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
