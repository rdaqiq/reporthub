var router = require('express').Router();




router.get('/', function(req, res) {
  res.send({message: "fuck you , its working!"})
});

router.get('/about', function(req, res) {
  res.render('main/about');
});


module.exports = router;