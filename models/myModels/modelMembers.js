const { family_members, family_assets } = require('../');

// ---------------------------------GET MEMBER DATA---------------------------------- //
const getMember = async (res, uid) => {
  if(uid){
    const result = await family_members.findByPk(uid);
    return result;
  } else {
    const result = await family_members.findAll();
    return result;
  }
}

// ---------------------------------CREATE MEMBER DATA---------------------------------- //
const createMember = async (res, data) => {
  await family_members.create(data);
  res.redirect('/');
}

// ---------------------------------UPDATE MEMBER DATA---------------------------------- //
const updateMember = async (res, data, uid) => {
  await family_members.update(data, {
    where:{id:uid}
  });
  res.redirect(`/members/detail/${uid}`);
}

// ---------------------------------DESTROY MEMBER DATA---------------------------------- //
const deleteMember = (res, uid) => {
  family_members.destroy({
    where:{id:uid}
  });
  res.redirect('/');
}

module.exports = { createMember, getMember, updateMember, deleteMember };
