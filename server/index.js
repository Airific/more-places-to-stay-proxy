const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3005;

app.use('/:id', express.static(path.join(__dirname, '/../public')));

// -------- proxy middleware -------------
  app.use(
    '/listings/gallery/:id',
    createProxyMiddleware({
      target: 'http://3.101.88.230',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/header/:id',
    createProxyMiddleware({
      target: 'http://3.101.88.230',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/moreplaces/:id',
    createProxyMiddleware({
      target: 'http://3.101.118.54',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/reviews/:id',
    createProxyMiddleware({
      target: 'http://3.89.20.244',
      changeOrigin: true,
    })
  );

// console.log(`listening on port ${port}`)
// server.listen(port);



app.listen(port, () => {
  console.log(`Airific listening at http://localhost:${port}`);
});

