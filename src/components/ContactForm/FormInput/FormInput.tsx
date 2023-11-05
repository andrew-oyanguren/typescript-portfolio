import { renderInputElement, InputConfigTypes } from '../helpers/helpers';

export default function FormInput({
  inputConfig,
}: {
  inputConfig: InputConfigTypes;
}) {
  return <div>{renderInputElement(inputConfig)}</div>;
}
