var express = require('express');
var router = express.Router();


var ctrlmenu =require('../controllers/menu')
var ctrlothers =require('../controllers/others')
var ctrlMain = require('../controllers/main');


router.get('/others', ctrlOthers.index);
router.get('/main', ctrlMain.index);
router.get('/menu', ctrlmenu.index);

module.exports = router;