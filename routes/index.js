const express = require('express');
const router = express.Router();
// ----------------------------------------------------------------------------- //
const { Sequelize, QueryTypes } = require('sequelize');
// ----------------------------------------------------------------------------- //
const { family_assets } = require('../models');
// ----------------------------------------------------------------------------- //
const { param, validationResult, body } = require('express-validator');
// ----------------------------------------------------------------------------- //
const { createMember, getMember,
        updateMember, deleteMember} = require('../models/myModels/modelMembers');
// ----------------------------------------------------------------------------- //
const sequelize = new Sequelize('test_javan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});



// ---------------------------------GET HOME PAGE---------------------------------- //
router.get('/', async function(req, res) {
  const result = await getMember(res);
  res.render('index', {result});
});

// ---------------------------------ADD NEW MEMBER---------------------------------- //
router.post('/members/add',
  body('nama').isAlpha('en-US', {ignore: '\s'}).not().isEmpty(), async function(req, res) {

  const errors = validationResult(req);
  const hasErrors = !errors.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  } else {
    //cek apakah jenis kelamin sudah di isi
    if(req.body.gender == 'Pilih Jenis Kelamin'){
     res.redirect('/');
   } else {
     const dataUser = {
       nama: req.body.nama,
       jenis_kelamin: req.body.gender }
     createMember(res, dataUser);
   }
  }
});

// ---------------------------------UPDATE MEMBER DATA---------------------------------- //
router.post('/members/update/:uid',
  body('nama').isAlpha('en-US', {ignore: '\s'}).not().isEmpty(),
  param('uid').isNumeric(), async function(req, res) {

  const errors = validationResult(req);
  const hasErrors = !errors.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  }

  const data = {
    nama: req.body.nama,
    jenis_kelamin: req.body.gender }
  updateMember(res, data, uid);
});

// ---------------------------------SHOW DETAIL MEMBER---------------------------------- //
router.get('/members/detail/:uid', param('uid').isNumeric(),  async (req, res) => {

  const error = validationResult(req);
  const hasErrors = !error.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  }

  let uid = req.params.uid;
  //get member data
  const result = await getMember(res, uid);
  //get member asset data
  const [dataAsset, meta] = await sequelize.query(`
    SELECT ownerships.id_member, family_assets.id, family_assets.nama, family_assets.harga
      FROM family_assets
      JOIN ownerships
        ON (ownerships.id_member = ${uid}) AND (ownerships.id_asset = family_assets.id)`);
  res.render('detailMembers', {result, dataAsset});
});


// ---------------------------------DESTROY MEMBER DATA---------------------------------- //
router.get('/members/delete/:uid', param('uid').isNumeric(), (req, res) => {

  const error = validationResult(req);
  const hasErrors = !error.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  }

  let uid = req.params.uid;
  deleteMember(res, uid);
});

module.exports = router;
