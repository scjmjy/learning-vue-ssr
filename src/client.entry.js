import createVueApp from "./app";

const vueApp = createVueApp();

const router = vueApp.$router;
router.onReady(() => {
    // 这里假定 App.vue 模板中根元素具有 `id="app"`
    vueApp.$mount("#app");
});
