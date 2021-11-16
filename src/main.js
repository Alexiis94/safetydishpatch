import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
import $ from "jquery";
window.$ = $;

app.use(router);
app.use($);

// iniciando app
app.mount("#app");
