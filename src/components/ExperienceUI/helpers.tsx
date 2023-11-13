import WebDevBody from './WebDeveloper/WebDeveloper';
import JrEngineer from './JrEngineer/JrEngineer';
import SoftwareEngineer from './SoftwareEngineer/SoftwareEngineer';

import { EXPERIENCE_UI_VARIANTS, UiVariantType } from './constants';

const getExperienceUIVariant = (variant: UiVariantType) => {
  switch (variant) {
    case EXPERIENCE_UI_VARIANTS.WEB_DEVELOPER:
      return <WebDevBody />;
    case EXPERIENCE_UI_VARIANTS.JR_ENGINEER:
      return <JrEngineer />;
    case EXPERIENCE_UI_VARIANTS.SOFTWARE_ENGINEER:
      return <SoftwareEngineer />;
  }
};

export { getExperienceUIVariant };
