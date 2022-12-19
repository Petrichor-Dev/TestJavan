const express = require('express');
const router = express.Router();
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = new Sequelize('test_javan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
const { createMember, getMember, updateMember, deleteMember} = require('../models/myModels/modelMembers');
const { family_assets } = require('../models');


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
  const [dataAsset, meta] = await sequelize.query(`
    SELECT ownerships.id_member, family_assets.id, family_assets.nama, family_assets.harga
      FROM family_assets
      JOIN ownerships
        ON (ownerships.id_member = ${uid}) AND (ownerships.id_asset = family_assets.id)`);
  res.render('detailMembers', {result, dataAsset});
});

router.get('/members/delete/:uid', (req, res) => {
  let uid = req.params.uid;
  deleteMember(res, uid);
});

module.exports = router;
