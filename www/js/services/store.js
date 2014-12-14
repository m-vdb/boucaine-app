module.exports = function ($window) {

  function Store (key) {
    this.key = "bcn-" + key;
    this.store = $window.localStorage;
  }

  Store.prototype.get = function () {
    return parseInt(this.store.getItem(this.key) || 0, 10);
  };

  Store.prototype.set = function (value) {
    return this.store.setItem(this.key, value);
  };

  Store.prototype.increment = function (value) {
    var newValue = this.get() + value;
    this.set(newValue);
    return newValue;
  };

  return {
    count: new Store("count"),
    promo: new Store("promo")
};