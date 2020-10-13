var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(
  '/info', 
  function(req, res) {
    var infoObj = {}; //$info = arrary();
    infoObj.cuenta = "0803199800498";
    infoObj.nombre = "Fernando Daniel Lopez Barahona";
    infoObj.email = "flopezbarahona1998@gmail.com";
    res.json(infoObj);
  }
  ); //get Info



module.exports = router;
