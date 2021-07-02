const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api/id/covid19/hospitals", {
      target: "https://dekontaminasi.com",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api/id/covid19/hospitals": "/api/id/covid19/hospitals"
      }
    })
  );
  app.use(
    proxy("/api/id/covid19/hoaxes", {
      target: "https://dekontaminasi.com",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api/id/covid19/hoaxes": "/api/id/covid19/hoaxes"
      }
    })
  );
};
