import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Import Pinia
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const pinia = createPinia(); // Create Pinia instance

import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(pinia).mount('#app');
