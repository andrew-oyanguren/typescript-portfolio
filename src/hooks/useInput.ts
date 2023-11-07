import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const [hasError, setHasError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = (validation?: (value: string) => boolean) => {
    if (validation) {
      setHasError(!validation(value));
    }
    setIsTouched(true);
  };

  const onFocus = () => {
    if (hasError && isTouched) {
      setHasError(false);
    }
  };

  return {
    hasError,
    isTouched,
    value,
    onBlur,
    onChange,
    onFocus,
  };
};

export default useInput;
