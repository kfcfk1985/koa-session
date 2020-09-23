const debug = require('debug')('8888888888:app');
var session = require('./');
var Koa = require('koa');
var app = new Koa();

app.keys = ['some secret hurr'];

app.use(session(app));

app.use(async (ctx, next) => {
  if ('/favicon.ico' == this.path) return;
  // var n = ctx.session.views || 0;
  let n = 1;
  ctx.session.views = ++n;

  debug('ctx.session assignment fninsh')

  ctx.body = n + ' views';
});

app.listen(3000);
console.log('listening on port 3000');