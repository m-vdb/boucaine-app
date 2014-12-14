module.exports = function ($scope, $ionicLoading, verifyCode, popins, store, promoCode, connectivity, PROMO_GOAL) {

  $scope.count = store.count.get();
  $scope.promo = store.promo.get();

  $scope.startScan = function () {
    if (!connectivity.ok()) {
      popins.alert.error("Problème de réseau", "Vous devez être connecté (3G, Edge ou Wifi) pour pouvoir effectuer un scan.");
      return;
    }

    $ionicLoading.show({
      template: 'Scan en cours...'
    });

    cordova.plugins.barcodeScanner.scan(function (result) {
      if (result.cancelled) {
        $ionicLoading.hide();
        return;
      }
      $ionicLoading.show({
        template: 'Vérification en cours...'
      });
      verifyCode(result.text).done(function (code) {
        var s = (code.number > 1) ? "s" : "",
            // increment the new count of pizzas
            newCount = store.count.increment(code.number),
            newPromoCount = Math.floor(newCount / PROMO_GOAL),
            prevPromoCount = Math.floor($scope.count / PROMO_GOAL),
            // compute the gain of promo (1 = 10 pizzas, 2 = 20 pizzas, etc...)
            gain = newPromoCount - prevPromoCount,
            title = "Scan réussi !",
            msg = "Vous venez d'ajouter " + code.number + " pizza" + s + ".",
            promoMsg = "Profitez d'une pizza offerte en communicant le code suivant lors de votre prochaine commande:<br/>";
        $scope.count = newCount;
        // retrieve the promo code if promo has been won
        if (gain) {
          $ionicLoading.show({
            template: 'Vous avez gagné une pizza offerte! Récupération du code promo...'
          });
          promoCode(gain).done(function (code) {
            $ionicLoading.hide();
            popins.alert.success(title, promoMsg + code.hash);
            $scope.promo = store.promo.append(code.hash);
          }).fail(function (xhr){
            // TODO: we need to make sure the client will have his promo code anyway
            console.log(xhr);
            $ionicLoading.hide();
            popins.alert.error("Une erreur s'est produite", "Une erreur s'est produite");
          });
        }
        // otherwise simply show a success message
        else {
          $ionicLoading.hide();
          popins.alert.success(title, msg);
        }
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
