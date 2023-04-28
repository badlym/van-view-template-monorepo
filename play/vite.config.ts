import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
export default defineConfig({
    plugins: [vue(),DefineOptions(),vueSetupExtend()],
});
