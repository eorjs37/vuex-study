import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import HelloWorld from "./components/HelloWorld.vue";
import { store } from "./store/index";

const app = createApp(App);
app.use(router);
app.component(HelloWorld);
app.use(store);
app.mount("#app");
