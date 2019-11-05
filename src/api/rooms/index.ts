import Router from 'koa-router';

const rooms = new Router();

rooms.get('/', ctx => {
  ctx.body = 'GET ' + ctx.request.path;
});

export default rooms;
