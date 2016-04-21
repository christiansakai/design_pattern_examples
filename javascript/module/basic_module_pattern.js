var basketModule = (function() {

  var basket = [];

  function doSomethingPrivate() {
    console.log("Doing something private");
  }

  function doSomethingElsePrivate() {
    console.log("Doing something else private");
  }

  return {

    addItem: function(item) {
      basket.push(item);
    },

    getItemCount: function() {
      return basket.length;
    },

    doSomething: doSomethingPrivate,

    getTotal: function() {

      var q = this.getItemCount();
      var p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    }

  };

})();

basketModule.addItem({
  item: 'bread',
  price: 0.5
});

basketModule.addItem({
  item: 'butter',
  price: 0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

// Output: undefined
console.log(basketModule.basket);

// Output: ReferenceError: basket is not defined
console.log(basket);
