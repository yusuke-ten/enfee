const Koa = require('koa');
const serve = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.status = 200;
  await ctx.render('index');
});

render(app, {
  root: path.join(__dirname, '../dist'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true,
});

app.use(router.routes()).use(router.allowedMethods());

app.use(serve(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log('start server, open http://localhost:3000');
});
