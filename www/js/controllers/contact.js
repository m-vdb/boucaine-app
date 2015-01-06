module.exports = function($scope, $ionicLoading) {

  $scope.positions = [{
    lat: 43.43771774793634,
    lng: 5.424571931362152
  }];

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.gameLocationClicked = function () {
    //pass control to mobile nav system
    AnalyticsTracker.event('gameDetail.gameLocationClicked');

    //default - works on android - http://habaneroconsulting.com/insights/opening-native-map-apps-from-the-mobile-browser#.VDEf6PmSx8E
    var geoUrl = "geo: " + $scope.positions.lat + ", " + $scope.positions.lng;
    if (ionic.Platform.isIOS()) {
    //https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
      geoUrl = 'maps:ll=' + $scope.positions.lat + ", " + $scope.positions.lng;
    }
    window.location = geoUrl;
  }

};
