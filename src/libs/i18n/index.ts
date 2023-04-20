import { createI18n } from 'vue-i18n';

import messages from '@/libs/i18n/message';

const i18n = createI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages,
});

export { i18n };
