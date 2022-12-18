var express = require('express');
var router = express.Router();
const { createMember, getMember, updateMember, deleteMember } = require('../models/myModels/modelMembers');

/* GET home page. */
router.get('/', async function(req, res) {
  const result = await getMember(res);
  res.render('index', {result})
});

router.post('/members/add', async function(req, res) {
  const data = {
    nama: req.body.nama,
    jenis_kelamin: req.body.gender
  }

  createMember(res, data);
});

router.post('/members/update/:uid', async function(req, res) {
  const uid = req.params.uid;
  const data = {
    nama: req.body.nama,
    jenis_kelamin: req.body.gender
  }
  updateMember(res, data, uid);
});

router.get('/members/detail/:uid', async (req, res) => {
  let uid = req.params.uid;
  const result = await getMember(res, uid);
  // res.send(result)
  res.render('detailMembers', {result});
});

router.get('/members/delete/:uid', (req, res) => {
  let uid = req.params.uid;
  deleteMember(res, uid);
});

module.exports = router;
