module.exports = function ($ionicPopup) {

  function alert (title, text) {
    return $ionicPopup.alert({
      title: title,
      template: text
    });
  }

  return {
    alert: {
      // TODO: later, styles would be different
      success: alert,
      error: alert
    }
  };
};
