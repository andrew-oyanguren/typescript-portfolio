import { FormEvent } from 'react';

import { INPUTS_CONFIG, INPUT_NAMES, InputNameValues } from './constants';
import { InputPropsTypes } from './helpers/helpers';
import { useInput, useSendEmail } from 'src/hooks';

import FormInput from './FormInput/FormInput';
import { Loader } from 'src/components';

import SendIcon from 'src/assets/svgs/send.svg';
import styles from './ContactForm.module.css';

export default function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    value: email,
    isTouched: emailIsTouched,
    hasError: emailHasError,
    onBlur: onBlurEmail,
    onChange: onChangeEmail,
    onFocus: onFocusEmail,
  } = useInput();

  const {
    value: inquery,
    onChange: onChangeInquery,
    onFocus: onFocusInquery,
  } = useInput('hello');

  const {
    value: message,
    onChange: onChangeMessage,
    onFocus: onFocusMessage,
  } = useInput();

  const { sendEmail, isLoading } = useSendEmail();

  const formatInputProps = (
    inputName: InputNameValues,
    props: InputPropsTypes,
    validation?: (value: string) => boolean
  ) => {
    switch (inputName) {
      case INPUT_NAMES.EMAIL:
        return {
          ...props,
          value: email,
          onBlur: () => onBlurEmail(validation),
          onChange: onChangeEmail,
          onFocus: onFocusEmail,
        };
      case INPUT_NAMES.INQUERY:
        return {
          ...props,
          value: inquery,
          onChange: onChangeInquery,
          onFocus: onFocusInquery,
        };
      case INPUT_NAMES.MESSAGE:
        return {
          ...props,
          value: message,
          onChange: onChangeMessage,
          onFocus: onFocusMessage,
        };
      default:
        return null;
    }
  };

  const formIsValid = emailIsTouched && !emailHasError && !!email.length;

  return isLoading ? (
    <Loader />
  ) : (
    <form
      onSubmit={async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formIsValid) {
          await sendEmail(email, inquery, message);
          onSuccess();
        }
      }}
      className={styles.ContactForm}
    >
      <>
        {INPUTS_CONFIG.map(
          ({
            inputName,
            element,
            props,
            children,
            validation,
            errorMessage,
          }) => {
            return (
              <div key={inputName} className={styles.formControl}>
                {validation && emailHasError ? (
                  <p className={styles.errorMessage}>{errorMessage}</p>
                ) : null}
                <FormInput
                  inputConfig={{
                    inputName,
                    element,
                    props: {
                      ...formatInputProps(inputName, props, validation),
                      className:
                        validation && emailHasError ? styles.error : '',
                    },
                    children,
                  }}
                />
              </div>
            );
          }
        )}
      </>

      <div className={styles.actions}>
        <button type='submit' disabled={!formIsValid}>
          <img src={SendIcon} alt='Send message button' />
          Send
        </button>
      </div>
    </form>
  );
}
