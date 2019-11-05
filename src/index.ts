import Koa from 'koa';
import Router from 'koa-router';
import api from './api';

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Server is listening to port 4000');
});
