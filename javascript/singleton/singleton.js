var mySingleton = (function() {

  var instance;

  function init() {

    function privateMethod() {
      console.log('I am private');
    }

    var privateVariable = "I'm also private";
    var privateRandomNumber = Math.random();

    return {

      publicMethod: function() {
        console.log('The public can see me!');
      },

      publicProperty: "I'm also public",

      getRandomNumber: function() {
        return privateRandomNumber;
      }

    };

  }

  return {
    getInstance: function() {

      if (!isntance) {
        instance = init();
      }

      return instance;

    }
  };

})();

var myBadSingleton = (function() {

})();
