const app = require('./FI/app').app;
const config = require('./FI/config');

app.listen(config.port,function(){
  const curTime = new Date();
  console.log('current:'+curTime.toLocaleString());
  console.log('host:' + config.host);
  console.log('prot:' + config.port);
  console.log(process.env.NODE_ENV);
})
