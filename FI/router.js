const Router = require('koa-router');
const router = new Router();
const config = require('./config');

router
  .get('/owner',function *(next){
    yield this.render('owner')
  })
  .get('/visitor',function *(next){
    yield this.render('visitor')
  })

exports.router = router;
