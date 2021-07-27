const createVueApp = require("./app");

/**
 * @param {{url:string}} context
 */
module.exports = (context) => {
    return new Promise((resolve, reject) => {
        const vueApp = createVueApp(context);

        const router = vueApp.$router;

        router.push(context.url);

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (matchedComponents.length === 0) {
                return reject({ code: 404 });
            }
            resolve(vueApp);
        }, reject);
    });
};
