const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api/id/covid19/hospitals", {
      target: "https://dekontaminasi.com",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/api/id/covid19/hoaxes", {
      target: "https://dekontaminasi.com",
      secure: false,
      changeOrigin: true,
    })
  );
};
