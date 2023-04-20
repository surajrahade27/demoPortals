const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const API_PROXY_URI = process.env.REACT_APP_API_URI; // API call

  app.use(
    createProxyMiddleware(API_PROXY_URI,{
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      // pathRewrite: {
      //     [API_PROXY_URI]: '',
      // },
    }),
  );
};
