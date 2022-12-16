var express = require('express');
var router = express.Router();
const { createMember, getMember, updateMember, deleteMember } = require('../models/myModels/modelMembers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {isActive:'active'});
});

router.get('/members/detail/:id', (req, res) => {
  res.render('index');
  let params = req.params.id;
});
module.exports = router;
