var express = require('express');
var router = express.Router();
const { createAsset, getAsset, updateAsset, deleteAsset } = require('../models/myModels/modelAssets');

router.get('/', async (req, res) => {
  const result = await getAsset(res);
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

router.get('/detail/:id', (req, res) => {
  let params = req.params.id;
  res.send(`detail assets page ID ${params}`);
});

router.get('/delete/:uid', (req, res) => {
  let uid = req.params.uid;
  deleteAsset(res, uid);
});

module.exports = router;
