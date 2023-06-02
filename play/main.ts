import { createApp } from "vue";
import App from "./app.vue";
  import van-view-templateComponent from '@van-view-template/components'
const app = createApp(App);
  app.use(van-view-templateComponent)
app.mount("#app");
