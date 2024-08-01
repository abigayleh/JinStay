// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import router from './router';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import 'tailwindcss/tailwind.css';
import './main.css';

import en from './locales/en.json';
import kr from './locales/kr.json';

// Create the i18n instance
const i18n = createI18n({
  locale: 'en', // set the default locale
  fallbackLocale: 'en',
  messages: {
    en,
    kr
  }
});

// Create the app instance
const app = createApp(App);

// Use Quasar, Router, and i18n
app.use(Quasar, quasarUserOptions)
   .use(router)
   .use(i18n)
   .mount('#app');
