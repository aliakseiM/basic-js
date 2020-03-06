module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      result.push(members[i].trimLeft()[0].toUpperCase());
    }
  }
  result = result.sort().join('');
  return result;
};