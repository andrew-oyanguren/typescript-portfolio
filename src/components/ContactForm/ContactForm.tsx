import FormInput from './FormInput/FormInput';

import { CONTACT_FORM_INPUTS_CONFIG } from './constants';

export default function ContactForm() {
  return (
    <form>
      <>
        {CONTACT_FORM_INPUTS_CONFIG.map((obj, idx) => (
          <FormInput key={`${obj.type}-${idx}`} inputConfig={obj} />
        ))}
      </>

      <>
        <button
          type='button'
          onClick={() => {
            console.log('submitted');
          }}
        >
          submit button
        </button>
      </>
    </form>
  );
}
