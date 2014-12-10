module.exports = function ($scope) {
  $scope.startScan = function () {
    $scope.loader = "Scanning...";
    cordova.plugins.barcodeScanner.scan(function (result) {
      $scope.result = result.text;
      $scope.loader = "Done.";
    }, function (error) {
      $scope.loader = "Error.";
    });
  };
};
