const { family_assets } = require('../');

const createAsset = () => {

}

const getAsset = async (res) => {
  const userData = await family_assets.findAll();
  res.send(userData);
}

const updateAsset = () => {

}

const deleteAsset = () => {

}



module.exports = { createAsset, getAsset, updateAsset, deleteAsset };
