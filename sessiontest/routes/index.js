var express = require('express');
var router = express.Router();
var checkAuth = require('../auth');

/* GET home page. */
router.get('/', checkAuth, function(req, res) {
    console.log(req.session);
    console.log(req.sessionID);
    res.render('index');
});

router.route('/login')

    .get(function(req, res) {
        res.render('login', {title: "LOGIN", message: req.flash('denied'), goodmessage: false});
    })

    .post(function(req, res) {
        req.session.user = true;
        res.render('login', {title: "LOGIN", message: "Successfully logged in", goodmessage: true});
    });

router.get('/logout', function(req, res) {
  req.session.user = false;
  res.render('logout');
});

module.exports = router;
