module.exports = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['ru', 'en'],
  keysManager: {},
  fallbackLang: ['en', 'ru'],
  missingHandler: {
    allowEmpty: true,
    logMissingKey: false,
    useFallbackTranslation: true
  }
};
