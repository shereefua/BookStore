// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/books',
//     createProxyMiddleware({
//       target: 'http://localhost:5000/books',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/books': ''
//       }
//     })
//   );
// };