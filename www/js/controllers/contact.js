module.exports = function($scope, $ionicLoading) {

  $scope.positions = [{
    lat: 43.43771774793634,
    lng: 5.424571931362152
  }];

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

};
