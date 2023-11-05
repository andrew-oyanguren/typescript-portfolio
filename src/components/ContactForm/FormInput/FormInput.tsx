import { renderInputElement, InputConfig } from '../helpers/helpers';

export default function FormInput({ inputConfig }: InputConfig) {
  return <div>{renderInputElement({ inputConfig })}</div>;
}
