const Vue = require("vue");
// const App = require("./App.vue");
const createVueRouter = require("./router/index");

/**
 *
 * @returns { Vue } Vue Instance
 */
module.exports = function createVueApp() {
    const router = createVueRouter();
    const app = new Vue({
        router,
        // render: (h) => h(App),
        template: '<div id="app"><router-view/></div>',
    });
    return app;
};
