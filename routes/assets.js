var express = require('express');
var router = express.Router();
const { createAsset, getAsset, updateAsset, deleteAsset } = require('../models/myModels/modelAssets');

router.get('/', (req, res) => {
  getAsset(res);
  // res.render('assets');
});

router.get('/detail/:id', (req, res) => {
  let params = req.params.id;
  res.send(`detail assets page ID ${params}`);
});

module.exports = router;
