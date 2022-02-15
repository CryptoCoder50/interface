import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors())

app.get('/products/:id', function get(req, res) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function listen () {
  // console.log('CORS-enabled web server listening on port 80')
})

// eslint-disable-next-line @typescript-eslint/no-shadow
export default function use(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://moonwalker.network/bsc-api-prices',
      changeOrigin: true,
    })
  );
}
