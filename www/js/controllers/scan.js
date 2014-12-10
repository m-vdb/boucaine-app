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
        $scope.result = "XHR Error";
      });
    }, function (error) {
      $ionicLoading.hide();
      $scope.result = "Scan Error.";
    });
  };
};
