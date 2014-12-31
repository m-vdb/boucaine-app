module.exports = function($scope, $ionicLoading) {

  $scope.positions = [{
    lat: 43.43771774793634,
    lng: 5.424571931362152
  }];

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.centerOnMe = function () {

    $scope.positions = [];
    $ionicLoading.show({
      template: 'Loading...'
    });


    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.positions.push({lat: pos.k,lng: pos.B});
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });

  };

  $scope.gameLocationClicked = function () {
    //pass control to mobile nav system
    AnalyticsTracker.event('gameDetail.gameLocationClicked');

    //default - works on android - http://habaneroconsulting.com/insights/opening-native-map-apps-from-the-mobile-browser#.VDEf6PmSx8E
    var geoUrl = "geo: " + $scope.positions.Latitude + ", " + $scope.positions.Longitude;
    if (ionic.Platform.isIOS()) {
    //https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
      geoUrl = 'maps:ll=' + $scope.positions.Latitude + ", " + $scope.positions.Longitude;
    }
    window.location = geoUrl;
  }

};
