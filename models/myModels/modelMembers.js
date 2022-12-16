const { family_members } = require('../');

const getMember = async (res) => {
  const result = await family_members.findAll();
  return result;
}

const createMember = async (res, data) => {
  await family_members.create(data);
  res.redirect('/');
}

const updateMember = () => {
  return true;
}

const deleteMember = (res, uid) => {
  family_members.destroy({where:{id:uid}});
  res.redirect('/')
}

module.exports = { createMember, getMember, updateMember, deleteMember };
