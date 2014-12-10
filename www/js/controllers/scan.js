module.exports = function ($scope, $ionicLoading) {
  $scope.startScan = function () {
    $ionicLoading.show({
      template: 'Scan en cours...'
    });
    cordova.plugins.barcodeScanner.scan(function (result) {
      $ionicLoading.hide();
      $scope.result = result.text;
    }, function (error) {
      $ionicLoading.hide();
      $scope.loader = "Error.";
    });
  };
};
