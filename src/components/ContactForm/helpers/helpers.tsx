import { createElement, ChangeEvent } from 'react';

import {
  INPUT_ELEMENTS,
  InputNameValues,
  InputElementValues,
} from '../constants';

export type InputPropsTypes = {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
};

export type InputConfigTypes = {
  inputName: InputNameValues;
  element: InputElementValues;
  props?: InputPropsTypes;
  children?: {
    options: { value: string; title: string; selected?: boolean }[];
  };
};

const renderInputElement = ({ element, props, children }: InputConfigTypes) => {
  switch (element) {
    case INPUT_ELEMENTS.TEXT:
      return createElement(element, props);
    case INPUT_ELEMENTS.SELECT:
      return createElement(
        element,
        props,
        children?.options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))
      );
    case INPUT_ELEMENTS.TEXT_AREA:
      return createElement(element, props);
    default:
      return null;
  }
};

const onSubmitHandler = (email: string, inquery: string, message: string) => {
  console.log('onSubmit fired...');
  const object = {
    email,
    inquery,
    message,
  };

  console.log('[SUBMIT] input states: ', object);
};

export { renderInputElement, onSubmitHandler };
