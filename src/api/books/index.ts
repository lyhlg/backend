import Router from 'koa-router';

import * as booksCtrl from './books.controller';

const books = new Router();

books.get('/', booksCtrl.list);
books.post('/', booksCtrl.create);
books.delete('/', booksCtrl.remove);
books.put('/', booksCtrl.replace);
books.patch('/', booksCtrl.update);

export default books;
