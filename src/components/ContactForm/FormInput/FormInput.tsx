import { createElement } from 'react';

import { INPUT_ELEMENTS } from '../constants';

type InputTypeKeys = keyof typeof INPUT_ELEMENTS;
type InputTypeValues = (typeof INPUT_ELEMENTS)[InputTypeKeys];

type InputConfig = {
  type: InputTypeValues;
  props?: { type?: string; placeholder?: string } | null;
  children?: { options: { value: string; title: string }[] };
};

type FormInputProps = {
  inputConfig: InputConfig;
};

const renderInputElement = (inputConfig: InputConfig) => {
  switch (inputConfig.type) {
    case INPUT_ELEMENTS.TEXT:
      return createElement(inputConfig.type, { ...inputConfig.props });
    case INPUT_ELEMENTS.SELECT:
      return createElement(
        inputConfig.type,
        { ...inputConfig.props },
        inputConfig?.children?.options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))
      );
    case INPUT_ELEMENTS.TEXT_AREA:
      return createElement(inputConfig.type, { ...inputConfig.props });
    default:
      return null;
  }
};

export default function FormInput({ inputConfig }: FormInputProps) {
  return renderInputElement(inputConfig);
}
