module.exports = function () {
  return {
    ok: function () {
      return navigator.connection.type != Connection.NONE;
    }
  };
};
