import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import("bootstrap/dist/css/bootstrap.min.css");

createApp(App).use(store).use(createPinia()).use(router).mount("#app");
