import Router from 'koa-router';
import books from './books';
import rooms from './rooms';

const api = new Router();

api.use('/books', books.routes());
api.use('/rooms', rooms.routes());

export default api;
