module.exports = function ($scope, $ionicLoading, verifyCode) {
  $scope.startScan = function () {
    $ionicLoading.show({
      template: 'Scan en cours...'
    });

    cordova.plugins.barcodeScanner.scan(function (result) {
      verifyCode(result.text).done(function () {
        $ionicLoading.hide();
        $scope.result = "Successfully scanned " + result.text;
      }).fail(function (xhr) {
        $ionicLoading.hide();
        var msg = (xhr.data && xhr.data.message) ? xhr.data.message : "Une erreur est survenue, veuillez réessayer.";
        $scope.result = msg;
      });
    }, function (error) {
      $ionicLoading.hide();
      $scope.result = "Scan impossible, veuillez réessayer.";
    });
  };
};
