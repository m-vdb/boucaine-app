module.exports = function ($window) {

  function Store () {
    this.key = "b-count";
    this.store = $window.localStorage;
  }

  Store.prototype.get = function () {
    return parseInt($window.localStorage.getItem(this.key) || 0, 10);
  };

  Store.prototype.set = function (value) {
    return $window.localStorage.setItem(this.key, value);
  };

  Store.prototype.increment = function (value) {
    var newValue = this.get() + value;
    this.set(newValue);
    return newValue;
  };

  return new Store();
};
