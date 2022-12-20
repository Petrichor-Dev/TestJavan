var express = require('express');
var router = express.Router();
// ----------------------------------------------------------------------------- //
const { Sequelize, QueryTypes } = require('sequelize');
// ----------------------------------------------------------------------------- //
const { param, validationResult, body } = require('express-validator');
// ----------------------------------------------------------------------------- //
const { createAsset, getAsset,
        updateAsset, deleteAsset } = require('../models/myModels/modelAssets');
// ----------------------------------------------------------------------------- //
const sequelize = new Sequelize('test_javan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});



// ---------------------------------ASSET PAGE---------------------------------- //
router.get('/', async (req, res) => {
  // get member asset data
  const [result, meta] = await sequelize.query(`
    SELECT family_assets.nama AS asset, family_assets.harga, family_members.nama, ownerships.id_member, ownerships.id_asset
      FROM ownerships
      JOIN family_assets
        ON family_assets.id = ownerships.id_asset
      JOIN family_members
        ON ownerships.id_member = family_members.id`);
  res.render('assets', {result})
});

// ---------------------------------ADD NEW ASSET---------------------------------- //
router.post('/add/:uid',
  body('nama_asset').isAlphanumeric('en-US', {ignore: '\s'}).not().isEmpty(),
  body('harga_asset').isNumeric().not().isEmpty(),
  param('uid').isNumeric(), (req, res) => {

  const errors = validationResult(req);
  const hasErrors = !errors.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  }

  const uid = req.params.uid;
  const dataUser = {
    nama: req.body.nama_asset,
    harga: req.body.harga_asset }
  createAsset(res, dataUser, uid);
});

// ---------------------------------UPDATE DATA ASSET---------------------------------- //
router.post('/update/:assetId/:uid',
  body('nama_asset').isAlphanumeric('en-US', {ignore: '\s'}).not().isEmpty(),
  body('harga_asset').isNumeric().not().isEmpty(),
  param('uid').isNumeric(),
  param('assetId').isNumeric(), (req, res) => {

  const errors = validationResult(req);
  const hasErrors = !errors.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  }

  const assetId = req.params.assetId;
  const uid = req.params.uid
  const data = {
    nama: req.body.nama_asset,
    harga: req.body.harga_asset }
  updateAsset(res, data, assetId, uid);
});

// ---------------------------------UPDATE DATA PAGE---------------------------------- //
router.get('/update/:uid', param('uid').isNumeric(), async (req, res) => {

  const errors = validationResult(req);
  const hasErrors = !errors.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  }

  const uid = req.params.uid;
  const [result, meta] = await sequelize.query(`
    SELECT ownerships.id_member, family_assets.nama, family_assets.id, family_assets.harga
      FROM ownerships
      JOIN family_assets
        ON (ownerships.id_asset = ${uid}) AND (family_assets.id = ownerships.id_asset)`);

  res.render('updateAsset', {result});
});

// ---------------------------------DESTROY DATA ASSET---------------------------------- //
router.get('/delete/:assetId/:uid',
  param('uid').isNumeric(),
  param('assetId').isNumeric(), (req, res) => {

  const errors = validationResult(req);
  const hasErrors = !errors.isEmpty();

  //cek apakah ada error pada proses validasi
  if(hasErrors){
    res.redirect('/');
  }

  const uid = req.params.uid;
  const assetId = req.params.assetId;
  deleteAsset(res, assetId, uid);
});

module.exports = router;
