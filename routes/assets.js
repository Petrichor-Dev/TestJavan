var express = require('express');
var router = express.Router();
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = new Sequelize('test_javan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
const { createAsset, getAsset, updateAsset, deleteAsset } = require('../models/myModels/modelAssets');

router.get('/', async (req, res) => {
  // const result = await getAsset(res);
  const [result, meta] = await sequelize.query(`
    SELECT family_assets.nama AS asset, family_assets.harga, family_members.nama, ownerships.id_member, ownerships.id_asset
      FROM ownerships
      JOIN family_assets
        ON family_assets.id = ownerships.id_asset
      JOIN family_members
        ON ownerships.id_member = family_members.id`);
  res.render('assets', {result})
});

router.post('/add/:uid', (req, res) => {
  const uid = req.params.uid;
  const data = {
    nama: req.body.nama_asset,
    harga: req.body.harga_asset
  }

  createAsset(res, data, uid);
});

router.post('/update/:assetId/:uid', (req, res) => {
  const uid = req.params.uid
  const assetId = req.params.assetId;
  const data = {
    nama: req.body.nama_asset,
    harga: req.body.harga_asset
  }

  // res.send({data,uid,assetId})

  updateAsset(res, data, assetId, uid);
});

router.get('/update/:uid', async (req, res) => {
  const uid = req.params.uid;
  const [result, meta] = await sequelize.query(`
    SELECT ownerships.id_member, family_assets.nama, family_assets.id, family_assets.harga
      FROM ownerships
      JOIN family_assets
        ON (ownerships.id_asset = ${uid}) AND (family_assets.id = ownerships.id_asset)`);

  res.render('updateAsset', {result});
});

router.get('/delete/:assetId/:uid', (req, res) => {
  let uid = req.params.uid;
  const assetId = req.params.assetId;
  deleteAsset(res, assetId, uid);
});

module.exports = router;
