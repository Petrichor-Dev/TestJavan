const { family_assets, ownership } = require('../');

const createAsset = async (res, data, uid) => {
  await family_assets.create(data);
  const result = await family_assets.findAll({
    attributes: ['id']
  });

  const id_asset = result[result.length - 1];
  await ownership.create({id_member:uid, id_asset:id_asset.id});
  res.redirect(`/members/detail/${uid}`);
}

const getAsset = async (res) => {
  const result = await family_assets.findAll();
  return result
}

const updateAsset = () => {

}

const deleteAsset = () => {

}



module.exports = { createAsset, getAsset, updateAsset, deleteAsset };
