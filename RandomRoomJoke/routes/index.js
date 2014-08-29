var express = require('express');
var router = express.Router();

var names = ['Calum', 'Emile', 'Chris'];

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

/* GET home page. */
router.get('/', function(req, res) {
  // 'Randomly' shuffle name order
  var order = shuffle(names);
  while (order[2] === 'Calum')
    order = shuffle(order);

  res.render('index', { title: 'Entirely Fair Random Room Assignment',
                        room1: order[0],
                        room2: order[1],
                        room3: order[2]});
});

module.exports = router;
