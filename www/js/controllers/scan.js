module.exports = function ($scope, $ionicLoading, verifyCode, popins) {
  $scope.startScan = function () {
    $ionicLoading.show({
      template: 'Scan en cours...'
    });

    cordova.plugins.barcodeScanner.scan(function (result) {
      verifyCode(result.text).done(function (code) {
        $ionicLoading.hide();
        var s = (code.number > 1) ? "s" : "";
        popins.alert.success("Scan réussi !", "Vous venez d'ajouter " + code.number + " pizza" + s + ".");
      }).fail(function (xhr) {
        $ionicLoading.hide();
        var msg = (xhr.data && xhr.data.message) ? xhr.data.message : "Une erreur est survenue, veuillez réessayer.";
        popins.alert.error("Le scan a échoué", msg);
      });
    }, function (error) {
      $ionicLoading.hide();
      popins.alert.error("Le scan a échoué", "Scan impossible, veuillez réessayer.");
    });
  };
};
