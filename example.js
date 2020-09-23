const debug = require('debug')('8888888888:app');
var session = require('./');
var Koa = require('koa');
var app = new Koa();

app.keys = ['some secret hurr'];

app.use(session(app));

app.use(function* (next){
  if ('/favicon.ico' == this.path) return;
  // var n = this.session.views || 0;
  let n = 1;
  this.session.views = ++n;

  debug('this.session assignment fninsh')

  this.body = n + ' views';
});

app.listen(3000);
console.log('listening on port 3000');
