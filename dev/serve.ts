import { createApp } from "vue";
import Dev from "./serve.vue";
import library from "@/entry.esm";

const app = createApp(Dev);
app.use(library);

app.mount("#app");
