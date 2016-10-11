const path = require('path');

module.exports = {
  protocol:'http://',
  host:'127.0.0.1',
  port:'8888',
  staticCache:path.join(__dirname,'./'),
};
