/* eslint-disable import/no-extraneous-dependencies */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1/*",
    createProxyMiddleware({
      target: "https://dev.octopus-it.ru/",
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: (path) => `${path}?format=json`,
    }),
  );
};
