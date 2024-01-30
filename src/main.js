import { createApp } from "vue";
import { createStore } from "./store";
import { createRouter } from "./router";
import { createVuetify } from "vuetify";
import App from "./App.vue";

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const store = createStore();
const router = createRouter();
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);
app.mount("#app");
