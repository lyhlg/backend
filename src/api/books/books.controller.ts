import Book from '../../models/book';

console.log(Book);

export const list = (ctx: any) => {
  ctx.body = 'listed';
};

export const create = (ctx: any) => {
  console.log(ctx.request.body);
  ctx.body = 'created';
};

export const remove = (ctx: any) => {
  ctx.body = 'deleted';
};

export const replace = (ctx: any) => {
  ctx.body = 'replaced';
};

export const update = (ctx: any) => {
  ctx.body = 'updated';
};
