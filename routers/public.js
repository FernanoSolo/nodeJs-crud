var express = require('express');
const path = require('path');

module.exports = function(app){
  var router = express.Router();
  router.use(express.static(process.cwd() + '/public'));
  app.use(router);

  app.get('*', function(req, res) {
    res.sendFile(path.join(process.cwd(), '/public', 'index.html'));
  });

}
