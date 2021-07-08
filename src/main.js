import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/storeCart";
import store from "./store/store";

createApp(App).use(store).use(storeCart).use(router).mount("#app");

// window.Kakao.init("d8bb26c0f48cd3d3133c47338c290266");
// window.Kakao.isInitialized();
