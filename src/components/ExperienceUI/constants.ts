const EXPERIENCE_UI_VARIANTS = Object.freeze({
  WEB_DEVELOPER: 'web developer',
  JR_ENGINEER: 'jr software engineer',
  SOFTWARE_ENGINEER: 'software engineer',
});

export type UiVariantType =
  (typeof EXPERIENCE_UI_VARIANTS)[keyof typeof EXPERIENCE_UI_VARIANTS];

export { EXPERIENCE_UI_VARIANTS };
