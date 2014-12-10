module.exports = function (Restangular) {
  return function (code) {
    var deferred = new $.Deferred();
    Restangular
      .one("codes", code)
      .post({type: "pizza"})
      .then(deferred.resolve, deferred.reject);
    return deferred.promise();
  };
};
