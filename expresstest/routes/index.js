var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/:id/:user', function(req, res) {
    console.log('in id route ' + req.params.id + ' ' + req.query.q);
//    res.write(JSON.stringify({ title: 'Express',
//                               id: req.params.id,
//                               user: req.params.user}));
//    res.end();
    res.render('index');
});

router.get('/ajax', function(req, res) {
    res.write(
        JSON.stringify({ title: 'Express', id: 'id', user: 'user'}));
    res.end();
});

router.get('/bootstraptest', function(req, res) {
   res.render('test');
});

module.exports = router;
