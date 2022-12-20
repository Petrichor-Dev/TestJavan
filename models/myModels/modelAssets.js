const { family_assets, ownership } = require('../');

// ---------------------------------CREATE MEMBER ASSET---------------------------------- //
const createAsset = async (res, data, uid) => {
  await family_assets.create(data);
  const result = await family_assets.findAll({
    attributes: ['id']
  });

  const id_asset = result[result.length - 1];
  await ownership.create({id_member:uid, id_asset:id_asset.id});
  res.redirect(`/members/detail/${uid}`);
}

// ---------------------------------GET MEMBER ASSET---------------------------------- /
const getAsset = async (uid) => {
  if(uid){
    const result = await family_assets.findByPk(uid);
    return result;
  } else {
    const result = await family_assets.findAll()
    return result;
  }
}

// ---------------------------------UPDATE MEMBER ASSET---------------------------------- /
const updateAsset = async (res, data, assetId, uid) => {
  await family_assets.update(data, {
    where:{id:assetId}
  });
  res.redirect(`/members/detail/${uid}`);
}

// ---------------------------------DESTROY MEMBER ASSET---------------------------------- /
const deleteAsset = (res, assetId, uid) => {
  family_assets.destroy({
    where:{id:assetId}
  });
  res.redirect(`/members/detail/${uid}`);
}

module.exports = { createAsset, getAsset, updateAsset, deleteAsset };
