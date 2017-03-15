/**
 * Created by khang on 3/15/2017.
 */
'use strict';

var express = require('express');
var controller = require('./controller');

var router = express.Router();

router.get('/all', controller.findAll);
router.get('/', controller.wellcome);
// router.get('/user/:account', controller.findByUser);
router.post('/addQuestion', controller.addQuestion);
module.exports = router;
