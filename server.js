const Vue = require("vue");
const server = require("express")();

const createVueApp = require("./src/server.entry");

const renderer = require("vue-server-renderer").createRenderer({
    template: require("fs").readFileSync("./index.template.html", "utf-8"),
});

server.get("*", (req, res) => {
    createVueApp({
        url: req.url,
    })
        .then((vueApp) => {
            const context = {
                title: "Hello Vue SSR",
                meta: `<meta name="1" content="1">
    <meta name="1" content="1">
    <meta name="1" content="1">`,
            };

            return renderer.renderToString(vueApp, context);
        })
        .then((html) => {
            res.type("html");
            res.charset = "utf-8";
            res.end(html);
        })
        .catch((err) => {
            if (err.code === 404) {
                res.status(404).end("Page not found");
            } else {
                res.status(500).end("Internal Server Error");
            }
        });
});

server.listen(8080, () => {
    console.log("[server] is listening on 8080");
});
