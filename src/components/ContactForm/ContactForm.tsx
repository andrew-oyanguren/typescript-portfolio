import { FormEvent } from 'react';

import { INPUTS_CONFIG, INPUT_NAMES, InputNameValues } from './constants';
import { onSubmitHandler, InputPropsTypes } from './helpers/helpers';

import FormInput from './FormInput/FormInput';
import useInput from 'src/hooks/useInput';

import styles from './ContactForm.module.css';

export default function ContactForm() {
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

  const formIsValid = emailIsTouched && !emailHasError;

  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formIsValid) {
          onSubmitHandler(email, inquery, message);
        }
      }}
      className={styles.ContactForm}
    >
      <div className={styles.control}>
        {emailIsTouched && email.length > 0 && emailHasError ? (
          <p>ERROR</p>
        ) : null}
        {INPUTS_CONFIG.map(
          ({ inputName, element, props, children, validation }) => {
            return (
              <FormInput
                key={inputName}
                inputConfig={{
                  inputName,
                  element,
                  props: { ...formatInputProps(inputName, props, validation) },
                  children,
                }}
              />
            );
          }
        )}
      </div>

      <div className={styles.actions}>
        <button type='submit' disabled={!formIsValid}>
          submit button
        </button>
      </div>
    </form>
  );
}