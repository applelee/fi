const app = require('koa')();
const path = require('path');
const renderEngine = require('koa-ejs');
const staticCache = require('koa-static-cache');
const router = require('./router').router;
const config = require('./config');

renderEngine(app,{
  root:path.join(__dirname,'view'),
  layout:'layout',
  viewExt:'html',
  cache:true,
  debug:true
});

app.use(router.routes());
app.use(staticCache(config.staticCache));
app.use(router.allowedMethods());

exports.app = app;
