import { useState, ChangeEvent, useEffect } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const [hasError, setHasError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    console.log('[STATE] useInput value: ', value);
  }, [value]);

  useEffect(() => {
    console.log('[STATE] useInput hasError: ', hasError);
  }, [hasError]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = (validation?: (value: string) => boolean) => {
    console.log('[onBlur] useInput fired...');
    if (!!value.length && validation) {
      console.log('[validation] useInput fired...');
      setHasError(!validation(value));
    }
    setIsTouched(true);
  };

  const onFocus = () => {
    console.log('[onFocus] useInput fired...');
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
