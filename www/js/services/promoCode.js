module.exports = function (Restangular) {
  return function (gain) {
    var deferred = new $.Deferred();
    Restangular
      .all("codes")
      .post({type: "promo", number: gain})
      .then(deferred.resolve, deferred.reject);
    return deferred.promise();
  };
};
