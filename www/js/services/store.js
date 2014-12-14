module.exports = function ($window, Class) {

  var Store = Class.extend({
    init: function (key) {
      this.key = "bcn-" + key;
      this.store = $window.localStorage;
    },
    get: function () {
      return this.deserialize(this.store.getItem(this.key) || this.defaultValue);
    },
    set: function (value) {
      return this.store.setItem(this.key, this.serialize(value));
    },
    defaultValue: null,
    deserialize: function (value) {
      return value;
    },
    serialize: function (value) {
      return value;
    }
  });

  var IntStore = Store.extend({
    defaultValue: '0',
    deserialize: function (value) {
      return parseInt(value, 10);
    },
    increment: function (value) {
      var newValue = this.get() + value;
      this.set(newValue);
      return newValue;
    }
  });

  var ListStore = Store.extend({
    defaultValue: '[]',
    deserialize: JSON.parse,
    serialize: JSON.stringify,
    append: function (value) {
      var newValue = this.get();
      newValue.push(value);
      this.set(newValue);
      return newValue;
    }
  });

  return {
    count: new IntStore("count"),
    promo: new ListStore("promo")
  };
};
