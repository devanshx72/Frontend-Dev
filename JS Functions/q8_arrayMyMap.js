"use strict";
// Q8: Add myMap to Array.prototype
if (!Array.prototype.myMap) {
  Object.defineProperty(Array.prototype, 'myMap', {
    value: function(callback, thisArg) {
      if (this == null) throw new TypeError('Array.prototype.myMap called on null or undefined');
      if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
      const result = [];
      for (let i = 0; i < this.length; i++) {
        if (i in this) result[i] = callback.call(thisArg, this[i], i, this);
      }
      return result;
    },
    writable: true,
    configurable: true
  });
}

console.log([1,2,3].myMap(n => n * 2));
