const INPUT_ELEMENTS = Object.freeze({
  TEXT: 'input',
  SELECT: 'select',
  TEXT_AREA: 'textarea',
});

const CONTACT_FORM_INPUTS_CONFIG = [
  {
    type: INPUT_ELEMENTS.TEXT,
    props: { type: 'text', placeholder: 'enter email' },
  },
  {
    type: INPUT_ELEMENTS.SELECT,
    props: { name: 'inquiry', id: 'inquiry' },
    children: {
      options: [
        { value: 'hello', title: 'Just saying hello' },
        { value: 'work', title: 'work together' },
        { value: 'other', title: 'other...' },
      ],
    },
  },
  {
    type: INPUT_ELEMENTS.TEXT_AREA,
    props: { placeholder: 'enter a message' },
  },
];

export { CONTACT_FORM_INPUTS_CONFIG, INPUT_ELEMENTS };
