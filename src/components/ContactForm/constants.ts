// email input validation:
// https://regex101.com/r/4FMpVT/1
const EMAIL_VALID_REGEX =
  /^([_[a-zA-Z0-9]+[._a-zA-Z0-9]*)(\+[a-zA-Z0-9]+)?@(([a-z0-9-]+\.)*[a-z]{2,4})$/;

const INPUT_ELEMENTS = Object.freeze({
  TEXT: 'input',
  SELECT: 'select',
  TEXT_AREA: 'textarea',
});

export type InputElementValues =
  (typeof INPUT_ELEMENTS)[keyof typeof INPUT_ELEMENTS];

const INPUT_NAMES = Object.freeze({
  EMAIL: 'email',
  INQUERY: 'inquery',
  MESSAGE: 'message',
});

export type InputNameValues = (typeof INPUT_NAMES)[keyof typeof INPUT_NAMES];

const INPUTS_CONFIG = [
  {
    inputName: INPUT_NAMES.EMAIL,
    element: INPUT_ELEMENTS.TEXT,
    props: { type: 'text', placeholder: 'your email' },
    validation: (value: string) => {
      console.log(`[Email] value: ${value}, validation fired...`);
      return EMAIL_VALID_REGEX.test(value);
    },
    errorMessage: 'Please proved a contact email',
  },
  {
    inputName: INPUT_NAMES.INQUERY,
    element: INPUT_ELEMENTS.SELECT,
    props: { name: 'inquiry', id: 'inquiry' },
    children: {
      options: [
        { value: 'hello', title: 'Just saying hello 👋', selected: true },
        { value: 'work', title: "Let's work together!" },
        { value: 'other', title: 'Other' },
      ],
    },
  },
  {
    inputName: INPUT_NAMES.MESSAGE,
    element: INPUT_ELEMENTS.TEXT_AREA,
    props: { placeholder: 'type a message...' },
  },
];

export { EMAIL_VALID_REGEX, INPUTS_CONFIG, INPUT_ELEMENTS, INPUT_NAMES };
