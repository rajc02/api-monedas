import { createApp } from 'vue';
import App from './App.vue';
import './style.css'

import i18n from './i18n.js';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

import Card from 'primevue/card';

const app = createApp(App);

app.use(i18n)
    .use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: false,
            },
        },
    })


app.component('pv-card', Card);
app.mount('#app');

/* createApp(App)
    .use(i18n)
    .use(PrimeVue, {ripple: true})
    .component('pv-card', Card)
    .mount('#app')
*/

/*app.component('pv-card', Card);
app.component('pv-button', Button);
app.mount('#app');*/

/*
* app.use(i18n)
    .use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false,
        },
    },
});
*
* */