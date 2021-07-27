// import Vue from "vue";
// import Router from "vue-router";
const Vue = require("vue");
const Router = require("vue-router");

Vue.use(Router);

Vue.component("home", {
    template: "<div>Home</div>",
});

module.exports = function createVueRouter() {
    return new Router({
        mode: "history",
        routes: [
            {
                path: "/",
                // component: () => import("../components/Home.vue"),
                component: {
                    template: "<div>Home</div>",
                },
            },
            {
                path: "/foo",
                // component: () => import("../components/Foo.vue"),
                component: {
                    template: "<div>foo</div>",
                },
            },
            {
                path: "/bar",
                // component: () => import("../components/Bar.vue"),
                component: {
                    template: "<div>bar</div>",
                },
            },
        ],
    });
};
