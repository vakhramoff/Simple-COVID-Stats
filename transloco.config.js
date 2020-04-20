module.exports = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['ru', 'en', 'de'],
  keysManager: {},
  fallbackLang: ['en', 'ru', 'de'],
  missingHandler: {
    allowEmpty: true,
    logMissingKey: false,
    useFallbackTranslation: true
  }
};
