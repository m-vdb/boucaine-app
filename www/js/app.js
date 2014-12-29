// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var api = "http://boucaine-api.herokuapp.com";

angular.module('starter', ['ionic', 'restangular','ngMap'])

/***** Constants *****/
.constant('PROMO_GOAL', 10)
/***** Services *****/
.factory('Class', require('./services/inheritance.js'))
.factory('promoCode', ['Restangular', require('./services/promoCode.js')])
.factory('verifyCode', ['Restangular', require('./services/verifyCode.js')])
.factory('popins', ['$ionicPopup', require('./services/popins.js')])
.factory('store', ['$window', 'Class', require('./services/store.js')])
.factory('connectivity', require('./services/connectivity.js'))
/***** Controllers *****/
.controller('ScanCtrl', [
  '$scope', '$ionicLoading', 'verifyCode',
  'popins', 'store', 'promoCode', 'connectivity',
  'PROMO_GOAL', require('./controllers/scan.js')])
.controller('ContactCtrl', ['$scope', require('./controllers/contact.js')])
.controller('MenuCtrl', ['$scope', require('./controllers/menu.js')])
.controller('MapController', function($scope, $ionicLoading) {

  $scope.positions = [{
    lat: 43.43771774793634,
    lng: 5.424571931362152
  }];

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.centerOnMe= function(){
  $scope.positions = [];
    
    
    $ionicLoading.show({
      template: 'Loading...'
    });


    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.positions.push({lat: pos.k,lng: pos.B});
      console.log(pos);
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });

  };

  $scope.gameLocationClicked = function() {
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

})
 
/***** Run *****/
.run(['$ionicPlatform', function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])
/***** Config *****/
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        template: require('./partials/tabs.html')
      })

      // Each tab has its own nav history stack:

      .state('tab.scan', {
        url: '/scan',
        views: {
          'tab-scan': {
            template: require('./partials/tab-scan.html'),
            controller: 'ScanCtrl'
          }
        }
      })

      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            template: require('./partials/tab-contact.html'),
            controller: 'ContactCtrl'
          }
        }
      })
      .state('tab.menu', {
        url: '/menu',
        views: {
          'tab-menu': {
            template: require('./partials/tab-menu.html'),
            controller: 'MenuCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/scan');
}]).config(['RestangularProvider',
  function(RestangularProvider) {
    RestangularProvider.setBaseUrl(api);
    RestangularProvider.setDefaultHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }
]);

