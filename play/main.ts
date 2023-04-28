import { createApp } from "vue";
import App from "./app.vue";
  import LiuchengjinComponent from '@liuchengjin/components'
const app = createApp(App);
  app.use(LiuchengjinComponent)
app.mount("#app");
