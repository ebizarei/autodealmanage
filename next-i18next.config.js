module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr","fa"],
  },
  localeDetection: false,
  fallbackLng: {
    default: ['en'],
  },
  react: { useSuspense: false },
  localePath:
  typeof window === 'undefined'
    ? require('path').resolve('./public/locales')
    : '/locales',
};
