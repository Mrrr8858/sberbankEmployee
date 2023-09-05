import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import store from "./store/index";
import axios from "axios";
const token = localStorage.getItem("token");
if (token) {
    axios.defaults.headers.common["Authorization"] = token;
}
loadFonts();

createApp(App).use(vuetify).use(router).use(store).mount("#app");
