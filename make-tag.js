module.exports = function mktag(name, vals) {
  return {
    Name: 'tag:'+name,
    Values: vals
  };
};
